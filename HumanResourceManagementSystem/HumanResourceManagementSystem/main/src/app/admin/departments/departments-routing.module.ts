import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { Page404Component } from 'src/app/authentication/locked/page404/page404.component';
import { AllDepartmentComponent } from './all-department/all-department.component';
import { AddDeptComponent } from './all-department/dialogs/add-dept/add-dept.component';
import { EditDeptComponent } from './all-department/dialogs/edit-dept/edit-dept.component';
import { DeleteDeptComponent } from './all-department/dialogs/delete-dept/delete-dept.component';

const routes: Routes = [
  {
    path: "add-department",
    component: AddDepartmentComponent,
  },
  {
    path: "all-department",
    component: AllDepartmentComponent,
  },
  {
    path: "add-dept",
    component: AddDeptComponent,
  },
  {
    path: "edit-dept",
    component: EditDeptComponent,
  },
  {
    path: "delete-dept",
    component: DeleteDeptComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
