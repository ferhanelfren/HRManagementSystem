/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DepartmentsService } from 'src/app/core/service/departments.service';
import { DepartmentsVM, Departments, DepartmentEntity, FileResponse } from 'src/app/hrms-swagger';
import { AddDeptComponent } from './dialogs/add-dept/add-dept.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { EditDeptComponent } from './dialogs/edit-dept/edit-dept.component';
import { DeleteDeptComponent } from './dialogs/delete-dept/delete-dept.component';

@Component({
  selector: 'app-all-department',
  templateUrl: './all-department.component.html',
  styleUrls: ['./all-department.component.scss']
})
export class AllDepartmentComponent extends UnsubscribeOnDestroyAdapter {
  saveDev!: FormGroup;
  hide= false;
  departmentsNameVM: DepartmentsVM[];

  searchFilter: string;
  filteredDepartments: DepartmentsVM[];
  departmentNameFilter: string;
  departmentNameSetText: string;
  updateButton: string;
  updateHide: boolean;
  saveHide: boolean;
  departmentViewModel = new DepartmentsVM();
  departmentModel = new Departments();
  isTableClicked = false;
  departmentName: string;
  mods = new DepartmentEntity();
  selectedDepartmentId: number;
  departmentExists: boolean | null = null;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 20];
  currentPage = 0;
  pageSize: number = this.pageSizeOptions[0];

  constructor(
    private departmentsService: DepartmentsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
    )
    {
    super();
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
    // co
    searchDeparment(){
      this.refresh();
    }

    refresh(){
      this.departmentsService.getDepartmentList(this.departmentNameFilter).subscribe(
        (fileResponse: FileResponse | null) => {
          if (fileResponse && fileResponse.data) {
            const fileReader = new FileReader();
            fileReader.onload = (event: any) => {
              const jsonData = JSON.parse(event.target.result);
              this.departmentsNameVM = jsonData;
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
      return this.departmentsNameVM.slice(startIndex, endIndex);
    }

    onPageChange(event: PageEvent) {
      this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;
    }

    addNew(){
      //this.dialog.open(AddDeptComponent);
      const dialogRef: MatDialogRef<AddDeptComponent> = this.dialog.open(AddDeptComponent);
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

    onEdit(data: any){
      const dialogRef = this.dialog.open(EditDeptComponent, {
        data: {
          departmentId: data.id,
          departmentData: data.departmentName
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDelete(data: any){
      const dialogDelete = this.dialog.open(DeleteDeptComponent, {
        data: {
          departmentId: data.id,
          departmentName: data.departmentName
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
      // dialogDelete.afterClosed().subscribe(
      //   (confirmed: boolean) => {
      //     if(confirmed){
      //       this.deleteDepartment(data);
      //     }
      //   }
      // );
    }
}
