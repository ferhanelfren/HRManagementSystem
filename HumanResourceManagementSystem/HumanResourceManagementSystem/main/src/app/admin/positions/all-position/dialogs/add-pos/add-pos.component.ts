import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PositionsService } from 'src/app/core/service/positions.service';
import { PositionsVM } from 'src/app/hrms-swagger';

@Component({
  selector: 'app-add-pos',
  templateUrl: './add-pos.component.html',
  styleUrls: ['./add-pos.component.scss']
})
export class AddPosComponent {
  positionsViewModel = new PositionsVM();
  // positionName:string;
  // positionDescription: string;
  // positionsModel = new Position();
  @Output() saveSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<AddPosComponent>,
    public positionService: PositionsService)
  {

  }

  onNoClick(){
    this.dialogRef.close();
  }

  onSave(){
    this.positionService.savePosition(this.positionsViewModel).subscribe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
