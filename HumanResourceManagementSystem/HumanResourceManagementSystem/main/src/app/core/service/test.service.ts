import { Injectable } from '@angular/core';
// <<<<<<< HEAD
// =======
import { take } from 'rxjs';
import { DataClient } from 'src/app/swagger-generated';
//>>>>>>> a3841c918aba13e2eddb99df31f6f1bc77af33b8

@Injectable({
  providedIn: 'root',
})
export class TestService {
//<<<<<<< HEAD  
// =======
 
  constructor(public dataClient: DataClient) {
    
  }

  // getEmployee() {
  //   return this.dataClient.getLeaveBalance().pipe(take(1));
  // }

// >>>>>>> a3841c918aba13e2eddb99df31f6f1bc77af33b8

}
