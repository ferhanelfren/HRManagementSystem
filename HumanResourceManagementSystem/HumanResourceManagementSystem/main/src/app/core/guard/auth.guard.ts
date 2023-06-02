import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../service/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.currentUser.pipe(
      map(user => {
        if (user) {
          if (user.role === 'Admin') {
            return true;
          } else if (user.role === 'User') {
            return true;
          } else {
            this.router.navigate(['/authentication/signin']);
            return false;
          }
        } else {
          this.router.navigate(['/authentication/signin']);
          return false;
        }
      })
    );
  }



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (this.authService.currentUserValue) {
  //     const userRole = this.authService.currentUserValue.role;
  //     if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
  //       this.router.navigate(['/authentication/signin']);
  //       return false;
  //     }
  //     return true;
  //   }

  //   this.router.navigate(['/authentication/signin']);
  //   return false;
  // }

  // canActivate(): Observable<boolean> {
  //   return this.authService.currentUser$.pipe(
  //     map(user => {
  //       if(user) return true
  //       else{
  //         return false;
  //       }
  //     })
  //     );
  // }

}
