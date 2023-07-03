import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepartmentsService } from 'src/app/core/service/departments.service';
import { Departments } from 'src/app/hrms-swagger';

@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.scss']
})
export class EditDeptComponent {

  departmentData: string;
  updateDepartmentName: Departments = new Departments();
  selectedDepartmentId: number;
  updateDepartmentId: number;
  departmentModel = new Departments();
  @Output() updateSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(
    public dialogRef: MatDialogRef<EditDeptComponent>,
    private departmentsService: DepartmentsService,
    @Inject(MAT_DIALOG_DATA) public data: any
    )
  {
    this.updateDepartmentId = data.departmentId;
    this.updateDepartmentName.departmentName = data.departmentData
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdate(){
    const id = this.updateDepartmentId;

    if (id) {
      this.departmentsService.updateDepartment(id, this.updateDepartmentName).subscribe(
        result =>{
          console.log(result);
          this.updateSuccess.emit(true);
          this.dialogRef.close();
        },
        error => {
          console.log(error);
        }
      );
    }
  }


}
