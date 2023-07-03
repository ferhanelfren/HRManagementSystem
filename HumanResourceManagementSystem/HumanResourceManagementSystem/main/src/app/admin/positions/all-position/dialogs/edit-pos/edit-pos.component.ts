import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PositionsService } from 'src/app/core/service/positions.service';
import { Positions, PositionsVM } from 'src/app/hrms-swagger';

@Component({
  selector: 'app-edit-pos',
  templateUrl: './edit-pos.component.html',
  styleUrls: ['./edit-pos.component.scss']
})
export class EditPosComponent {
  @Output() updateSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  positionId: number;
  updatePositionData: Positions = new Positions();
  // positionName: string;
  // positionDescription: string;

  //updateDepartmentName: Departments = new Departments();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private positionService: PositionsService,
              public dialogRef: MatDialogRef<EditPosComponent>)
  {
      this.updatePositionData.id = data.positionId;
      this.updatePositionData.positionName = data.positionName;
      this.updatePositionData.positionDescription = data.positionDescription;
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

  // onUpdate(){
  //   const id = this.updateDepartmentId;

  //   if (id) {
  //     this.departmentsService.updateDepartment(id, this.updateDepartmentName).subscribe(
  //       result =>{
  //         console.log(result);
  //         this.updateSuccess.emit(true);
  //         this.dialogRef.close();
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  //   }

  onUpdate(){
    const id = this.updatePositionData.id;

    if(id){
      this.positionService.updatePosition(id, this.updatePositionData).subscribe(
        result => {
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


