import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealershipsRoutingModule } from './dealerships-routing.module';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewDealershipDialogComponent } from './dialogs/view-dealership-dialog/view-dealership-dialog.component';


@NgModule({
  declarations: [
    ListComponent,
    ViewDealershipDialogComponent
  ],
  imports: [
    CommonModule,
    DealershipsRoutingModule,
    SharedModule
  ]
})
export class DealershipsModule { }
