import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarageRoutingModule } from './garage-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserGarageComponent } from './pages/user-garage/user-garage.component';
import { ListComponent } from './pages/list/list.component';
import { ViewCarDialogComponent } from './dialogs/view-car-dialog/view-car-dialog.component';
import { DeleteCarDialogComponent } from './dialogs/delete-car-dialog/delete-car-dialog.component';
import { CreateServiceRequestDialogComponent } from './dialogs/create-service-request-dialog/create-service-request-dialog.component';
import { CreateCarDialogComponent } from './dialogs/create-car-dialog/create-car-dialog.component';

@NgModule({
  declarations: [
    UserGarageComponent, ListComponent, ViewCarDialogComponent, DeleteCarDialogComponent, CreateServiceRequestDialogComponent, CreateCarDialogComponent
  ],
  imports: [
    CommonModule,
    GarageRoutingModule,
    SharedModule,
  ]
})
export class GarageModule { }
