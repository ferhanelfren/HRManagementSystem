/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { PositionsService } from 'src/app/core/service/positions.service';
import { FileResponse, PositionsVM } from 'src/app/hrms-swagger';
import { AddPosComponent } from './dialogs/add-pos/add-pos.component';
import { EditPosComponent } from './dialogs/edit-pos/edit-pos.component';
import { DeletePosComponent } from './dialogs/delete-pos/delete-pos.component';

@Component({
  selector: 'app-all-position',
  templateUrl: './all-position.component.html',
  styleUrls: ['./all-position.component.scss']
})
export class AllPositionComponent {

  positionNameFilter: string;
  positionsNameVM: PositionsVM[];
  positionName:string;
  positionDescription: string;

  constructor(private positionService: PositionsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar)
  {
    this.refresh();
  }

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 20];
  currentPage = 0;
  pageSize: number = this.pageSizeOptions[0];

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.paginator.page.subscribe((pageEvent: PageEvent) => {
      this.currentPage = pageEvent.pageIndex;
      this.pageSize = pageEvent.pageSize;
    });
  }
  getPageItems(){
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.positionsNameVM.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  searchPosition(){
    this.refresh();
  }

  refresh(){
    this.positionService.getPositionList(this.positionNameFilter).subscribe(
      (fileResponse: FileResponse | null) => {
        if (fileResponse && fileResponse.data) {
          const fileReader = new FileReader();
          fileReader.onload = (event: any) => {
            const jsonData = JSON.parse(event.target.result);
            this.positionsNameVM = jsonData;
            this.paginator.pageIndex = 0; // Reset page index to 0 when new data is loaded
          };
          fileReader.readAsText(fileResponse.data);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  addNew(){
      //this.dialog.open(AddDeptComponent);
      const dialogRef: MatDialogRef<AddPosComponent> = this.dialog.open(AddPosComponent);
      dialogRef.componentInstance.saveSuccess.subscribe((success: boolean) => {
        if (success) {
          this.showNotification(
            'snackbar-success',
            'Department added successfully',
            'bottom',
            'center'
          );
          this.refresh();
        }
      });
    }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onEdit(data: any){
    const dialogRef = this.dialog.open(EditPosComponent, {
      data: {
        positionId: data.id,
        positionName: data.positionName,
        positionDescription: data.positionDescription
      }
    });

    dialogRef.componentInstance.updateSuccess.subscribe((success: boolean) => {
      if (success) {
        this.showNotification(
          'snackbar-success',
          'Department updated successfully',
          'bottom',
          'center'
        );
        this.refresh();
      }
    });
  }


  onDelete(data: any){
    const dialogDelete = this.dialog.open(DeletePosComponent, {
      data: {
        //need e pasa tanan object para mo apear pag e set ang object
        positionId: data.id,
        positionName: data.positionName,
        positionDescription: data.positionDescription
      }
    });

    dialogDelete.componentInstance.deleteSuccess.subscribe((success: boolean) => {
      if (success) {
        this.showNotification(
          'snackbar-danger',
          'Department deleted successfully',
          'bottom',
          'center'
        );
        this.refresh();
      }
    });
  }

}
