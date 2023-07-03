/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take} from 'rxjs/operators';
import { User } from '../models/user';
import { EmployeeModel } from '../models/employeeModel';
import { environment } from 'src/environments/environment.development';
import { AccountClient, FileResponse, LoginVM } from 'src/app/hrms-swagger';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  // private currentUserSource = new BehaviorSubject<User>(null);
  // currentUser$ = this.currentUserSource.asObservable();

  baseURL = 'https://localhost:5001/api/';

  constructor(private http: HttpClient,private accountClient: AccountClient) {
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
      .post<User>(`${environment.apiUrl}api/Account/login`, model)
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

  // register(model: LoginVM) {
  //   return this.http.post<User>(this.baseURL + 'Account/register', model).pipe(
  //     map(user => {
  //       if(user){
  //         localStorage.setItem('user', JSON.stringify(user));
  //       }
  //       return user;
  //     })
  //   )
  // }

  // registerEmployee(
  //   employeesVM: HRMSUserVm,
  //   positionName: string,
  //   departmentName:string,
  //   file: File){

  //         employeesVM.positionName = positionName;
  //         employeesVM.departmentName = departmentName;
  //         employeesVM.image = file;

  //         return this.accountClient.createEmployee(employeesVM).pipe(take(1));
  // }

  getEmployeeList(userNameFilter: string): Observable<FileResponse | null> {
    return this.accountClient.getEmployees(userNameFilter).pipe(take(1));
  }



  registerEmployee(employeeModel: EmployeeModel) {
    return this.accountClient.createEmployee(
      employeeModel.imageFile,
      employeeModel.username,
      employeeModel.password,
      employeeModel.email,
      employeeModel.lastName,
      employeeModel.firstName,
      employeeModel.middleName,
      employeeModel.extentName,
      employeeModel.phoneNumber,
      employeeModel.gender,
      employeeModel.birthDate,
      employeeModel.placeBirth,
      employeeModel.bloodType,
      employeeModel.height,
      employeeModel.weight,
      employeeModel.citizenship,
      employeeModel.civilStatus,
      employeeModel.religion,
      employeeModel.ethnicity,
      employeeModel.tribalAffiliation,
      employeeModel.presentAddress,
      employeeModel.presentCityMun,
      employeeModel.presentProvince,
      employeeModel.presentZip,
      employeeModel.permanentAddress,
      employeeModel.permanentCityMun,
      employeeModel.permanentProvince,
      employeeModel.permanentZip,
      employeeModel.dateHired,
      employeeModel.nationalIDNo,
      employeeModel.tINNo,
      employeeModel.sSSNo,
      employeeModel.pagibigNo,
      employeeModel.philHealthNo,
      employeeModel.spouseFullName,
      employeeModel.spouseContactNo,
      employeeModel.spouseOccupation,
      employeeModel.spouseCompanyName,
      employeeModel.spouseCompanyAdd,
      employeeModel.fatherName,
      employeeModel.fatherOccupation,
      employeeModel.motherName,
      employeeModel.motherOccupation,
      employeeModel.govLicensureExam,
      employeeModel.dateExam,
      employeeModel.rating,
      employeeModel.regNo,
      employeeModel.placeofExam,
      employeeModel.dateRegitered,
      employeeModel.validity,
      employeeModel.remarks,

      employeeModel.primarySchool,
      employeeModel.primaryAcademicHonor,
      employeeModel.primaryYearGraduated,
      employeeModel.secondarySchool,
      employeeModel.secondaryAcademicHonor,
      employeeModel.secondaryYearGraduated,
      employeeModel.tertiarySchool,
      employeeModel.tertiaryAcademicHonor,
      employeeModel.degreeEarned,


      employeeModel.major,
      employeeModel.tertiaryYearGraduated,
      employeeModel.mastersSchool,
      employeeModel.mastersAcademicHonor,
      employeeModel.mastersDegreeEarned,
      employeeModel.mastersMajor,
      employeeModel.mastersYearGraduated,
      employeeModel.phdSchool,
      employeeModel.phdAcademicHonor,
      employeeModel.phdDegreeEarned,
      employeeModel.phdMajor,
      employeeModel.phdYearGraduated,

      employeeModel.positionName,
      employeeModel.employeeNumber,
      employeeModel.departmentName,
    ).pipe(take(1));

  }


}
