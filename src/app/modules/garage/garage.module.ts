import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarageRoutingModule } from './garage-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserGarageComponent } from './pages/user-garage/user-garage.component';


@NgModule({
  declarations: [UserGarageComponent],
  imports: [
    CommonModule,
    GarageRoutingModule,
    SharedModule
  ]
})
export class GarageModule { }
