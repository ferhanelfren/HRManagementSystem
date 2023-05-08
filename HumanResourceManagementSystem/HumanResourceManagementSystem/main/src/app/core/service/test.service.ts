import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { DataClient, EmployeeEntity } from 'swagger-generate';

@Injectable({
  providedIn: 'root',
})
export class TestService {
 
  constructor(public dataClient: DataClient) {
    
  }

  getEmployee() {
    return this.dataClient.getEmployee().pipe(take(1));
  }


}
