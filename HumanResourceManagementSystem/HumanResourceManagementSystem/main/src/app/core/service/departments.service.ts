
import { Injectable } from '@angular/core';
import { Observable, take} from 'rxjs';
import {Departments, DepartmentsVM, EmployeeClient, FileResponse} from 'src/app/hrms-swagger';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private employeeClient: EmployeeClient) { }


  // baseUrl = 'https://localhost:5001/';


  saveDepartment(model: DepartmentsVM){
    return this.employeeClient.addDepartments(model).pipe(take(1));
    // return this.http.post<DepartmentsVM>(`${environment.apiUrl}api/Employee/AddOrUpdateDepartments`, model);
  }

  // getDepartmentList(){
  //   return this.employeeClient.getDepartment().pipe(take(1));
  // }

  getDepartmentList(departmentNameFilter: string): Observable<FileResponse | null> {
    return this.employeeClient.getDepartment(departmentNameFilter)
    .pipe(take(1));
  }

  // updateDepartment(id: number, model: DepartmentsVM): Observable<DepartmentsVM> {
  //   return this.employeeClient.updateDepartment(id, model).pipe(take(1));
  // }

  // updateDepartment(id: number, departmentName: Departments) {
  //   return this.employeeClient.updateDepartment(id, departmentName).pipe(take(1));
  // }
  updateDepartment(id: number, department: Departments): Observable<any> {
    return this.employeeClient.updateDepartment(id, department).pipe(take(1));
  }

  deleteDepartment(id: number) {
    return this.employeeClient.deleteDepartment(id).pipe(take(1));
  }

  // checkIfDepartmentNameExists(checkDepartmentName: string){
  //   return this.employeeClient.
  // }

  checkIfDepartmentNameExists(departmentName: string){
    return this.employeeClient.checkIfDepartmentNameExists(departmentName).pipe(take(1));
  }


  // checkIfDepartmentNameExists(departmentName: string): Observable<boolean> {
  //   return this.employeeClient.checkIfDepartmentNameExists(departmentName)
  //     .pipe(
  //       map(response => !!response) // Convert response to boolean
  //     );
  // }



}
