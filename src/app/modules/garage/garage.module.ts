import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarageRoutingModule } from './garage-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserGarageComponent } from './pages/user-garage/user-garage.component';
import { ListComponent } from './pages/list/list.component';
import { ViewCarDialogComponent } from './dialogs/view-car-dialog/view-car-dialog.component';
import { DeleteCarDialogComponent } from './dialogs/delete-car-dialog/delete-car-dialog.component';

@NgModule({
  declarations: [
    UserGarageComponent, ListComponent, ViewCarDialogComponent, DeleteCarDialogComponent
  ],
  imports: [
    CommonModule,
    GarageRoutingModule,
    SharedModule,
  ]
})
export class GarageModule { }
