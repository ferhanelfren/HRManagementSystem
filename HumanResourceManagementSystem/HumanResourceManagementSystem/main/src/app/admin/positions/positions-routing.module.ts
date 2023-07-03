import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPositionComponent } from './add-position/add-position.component';
import { Page404Component } from 'src/app/authentication/locked/page404/page404.component';
import { AddPosComponent } from './all-position/dialogs/add-pos/add-pos.component';
import { EditPosComponent } from './all-position/dialogs/edit-pos/edit-pos.component';
import { DeletePosComponent } from './all-position/dialogs/delete-pos/delete-pos.component';
import { AllPositionComponent } from './all-position/all-position.component';

const routes: Routes = [
  {
    path: "add-position",
    component: AddPositionComponent,
  },
  {
    path: "add-pos",
    component: AddPosComponent,
  },
  {
    path: "edit-pos",
    component: EditPosComponent,
  },
  {
    path: "delete-pos",
    component: DeletePosComponent,
  },
  {
    path: "all-position",
    component: AllPositionComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionsRoutingModule { }
