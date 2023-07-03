import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss']
})
export class AddPositionComponent {
  @Output() saveSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

}
