/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PositionsService } from 'src/app/core/service/positions.service';
import { Positions } from 'src/app/hrms-swagger';

@Component({
  selector: 'app-delete-pos',
  templateUrl: './delete-pos.component.html',
  styleUrls: ['./delete-pos.component.scss']
})
export class DeletePosComponent {
  deletePositionId: number;
  deletePositionData: Positions = new Positions();
  @Output() deleteSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<DeletePosComponent>,
    private positionService: PositionsService,
    @Inject(MAT_DIALOG_DATA) public data: any
    )
  {
    this.deletePositionData.id = data.positionId;
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onDelete(){
    const id = this.deletePositionData.id;
    //console.log(id);

    if(id){
      this.positionService.deletePostion(id).subscribe(
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
      console.log('No Position id found.');
    }
  }
}
