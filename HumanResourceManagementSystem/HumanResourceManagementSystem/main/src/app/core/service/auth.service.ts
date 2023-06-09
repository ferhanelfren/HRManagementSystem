/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import { LoginVM, AuthenticationClient} from 'src/app/swagger-generated-hrms';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  // private currentUserSource = new BehaviorSubject<User>(null);
  // currentUser$ = this.currentUserSource.asObservable();

  baseURL = 'https://localhost:5001/api/';

  constructor(private http: HttpClient,private authClient: AuthenticationClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
     return this.currentUserSubject.value;
  }


  getUserRoles(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseURL}/roles`);
  }

  hasRole(role: string): Observable<boolean> {
    return this.getUserRoles().pipe(
      map((roles: string[]) => roles.includes(role))
    );
  }

  // login(model: LoginVM) {
  //   return this.http
  //     .post<User>(`${environment.apiUrl}api/Authentication/login`, model)
  //     .pipe(
  //       switchMap((user) => {
  //         return this.http.get<User>(`${environment.apiUrl}api/User/${user.id}`).pipe(
  //           map((userDetails) => {
  //             user.username = userDetails.username;
  //             // Store user details and jwt token in local storage to keep user logged in between page refreshes
  //             localStorage.setItem('currentUser', JSON.stringify(user));
  //             this.currentUserSubject.next(user);
  //             return user;
  //           })
  //         );
  //       })
  //     );
  // }


  login(model: LoginVM) {
    return this.http
      .post<User>(`${environment.apiUrl}api/Authentication/login`, model)
      .pipe(
        map((user) => {
          //console.log(user);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  // login(model: LoginVM): Observable<any>
  // {
  //   return this.authClient.login(model);
  // }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(this.currentUserValue);
    return of({ success: false });
  }

  register(model: LoginVM) {
    return this.http.post<User>(this.baseURL + 'Authentication/register', model).pipe(
      map(user => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
      })
    )
  }
}
