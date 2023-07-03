import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentsService } from 'src/app/core/service/departments.service';
import { EditDeptComponent } from '../edit-dept/edit-dept.component';
import { Departments } from 'src/app/hrms-swagger';

@Component({
  selector: 'app-delete-dept',
  templateUrl: './delete-dept.component.html',
  styleUrls: ['./delete-dept.component.scss']
})
export class DeleteDeptComponent {

    deleteDepartmentId: number;
    deleteDepartmentName: Departments = new Departments();
    @Output() deleteSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<DeleteDeptComponent>,
    private departmentsService: DepartmentsService,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {

    this.deleteDepartmentId = data.departmentId;
    this.deleteDepartmentName.departmentName = data.departmentData

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete(){
    const id = this.deleteDepartmentId;
    // console.log(id);

    if(id){
      this.departmentsService.deleteDepartment(id).subscribe(
        result =>{
          console.log(result);
          this.deleteSuccess.emit(true);
          this.dialogRef.close();
        },
        error => {
          console.log(error);
        }
      );
    } else{
      console.log('No department id found.');
    }
  }

}
