import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { EmployeeClient, FileResponse, Positions, PositionsVM } from 'src/app/hrms-swagger';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private employeeClient: EmployeeClient) { }

  getPositionList(positionNameFilter: string):Observable<FileResponse | null> {
    return this.employeeClient.getPositions(positionNameFilter)
    .pipe(take(1));
  }

  savePosition(model: PositionsVM){
    return this.employeeClient.addPositions(model).pipe(take(1));
  }

  updatePosition(id: number, positions: Positions){
    return this.employeeClient.updatePosition(id, positions).pipe(take(1));
  }

  deletePostion(id: number){
    return this.employeeClient.deletePosition(id).pipe(take(1));
  }


}
