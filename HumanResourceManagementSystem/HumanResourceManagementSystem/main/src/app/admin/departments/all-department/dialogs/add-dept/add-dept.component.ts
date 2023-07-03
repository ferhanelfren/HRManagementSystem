/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DepartmentsService } from 'src/app/core/service/departments.service';
import { Departments, DepartmentsVM } from 'src/app/hrms-swagger';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.scss']
})
export class AddDeptComponent {
  departmentViewModel = new DepartmentsVM();
  departmentModel = new Departments();
  departmentName: string;
  @Output() saveSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<AddDeptComponent>,
    private departmentsService: DepartmentsService) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.departmentsService.saveDepartment(this.departmentViewModel).subscribe(
      (result: any) => {
        console.log(result);
        this.saveSuccess.emit(true); // Emit the success event
        this.dialogRef.close(); // Close the dialog
      },
      error => {
        console.log(error);
      }
    );
  }


}
