import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionsRoutingModule } from './positions-routing.module';
import { AddPositionComponent } from './add-position/add-position.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllPositionComponent } from './all-position/all-position.component';
import { AddPosComponent } from './all-position/dialogs/add-pos/add-pos.component';
import { EditPosComponent } from './all-position/dialogs/edit-pos/edit-pos.component';
import { DeletePosComponent } from './all-position/dialogs/delete-pos/delete-pos.component';


@NgModule({
  declarations: [
    AddPositionComponent,
    AllPositionComponent,
    AddPosComponent,
    EditPosComponent,
    DeletePosComponent
  ],
  imports: [
    CommonModule,
    PositionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSortModule,
    MatTooltipModule,
    MatToolbarModule,
    MatMenuModule,
    ComponentsModule,
    SharedModule,
    MatProgressSpinnerModule,
  ]
})
export class PositionsModule { }
