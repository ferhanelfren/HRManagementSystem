/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, ViewChild} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


import { DepartmentsService } from 'src/app/core/service/departments.service';
import { DepartmentEntity, Departments, DepartmentsVM, FileResponse } from 'src/app/hrms-swagger';
import { DepartmentDialogComponent } from '../department-dialog/department-dialog.component';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent{


  // departmentsModel = new DepartmentsVM();

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
    private dialog: MatDialog
    )
    {
      this.saveDev = new FormGroup({
        departmentNameFilter: new FormControl(''),
        departmentModel: new FormControl('')
      });
      this.loadDepartments();
    }

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

    onSave() {
      this.departmentsService.saveDepartment(this.departmentViewModel).subscribe(
        (result: any) => {
          console.log(result);
          this.loadDepartments();
          this.departmentViewModel.departmentName = " ";
          this.dialog.open(DepartmentDialogComponent);
        },
        error => {
          console.log(error);
        }
      );
    }

    onUpdate(){
      const id = this.selectedDepartmentId;

      if(id){
        this.departmentsService.updateDepartment(id, this.departmentModel).subscribe(
          result => {
            console.log(result);
          },
          error => {
            console.log(error);
          }
        );
      }
    }

    onDelete() {
      const id = this.selectedDepartmentId;

      if(id){
        this.departmentsService.deleteDepartment(id).subscribe(
          result => {
            this.loadDepartments();
            console.log(result);
          },
          error => {
            console.log("ERROR", error);
          }
        );
      }
    }
  // loadDepartments(): void {
  //   this.departmentsService.getDepartmentList(this.departmentNameFilter).subscribe(
  //     (fileResponse: FileResponse | null) => {
  //       if (fileResponse && fileResponse.data) {
  //         const fileReader = new FileReader();
  //         fileReader.onload = (event: any) => {
  //           const jsonData = JSON.parse(event.target.result);
  //           this.departmentsName = jsonData;
  //           //console.log(jsonData);
  //         };
  //         fileReader.readAsText(fileResponse.data);
  //       }
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
  loadDepartments(){
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

  searchDeparment(){
    this.loadDepartments();
  }

  onClickData(data: any){
    console.log(data);
    this.departmentModel.departmentName = data.departmentName;
    this.isTableClicked= true;
    this.selectedDepartmentId = data.id;
  }

  // checkIfDepartmentNameExists(){

  // }

  // ngAfterViewInit() {
  //   this.paginator.page.subscribe(() => {
  //     this.getPageItems();
  //   });
  // }

  // getPageItems() {
  //   const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //   const endIndex = startIndex + this.paginator.pageSize;
  //   return this.dd.slice(startIndex, endIndex);
  // }

}





