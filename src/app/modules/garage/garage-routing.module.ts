import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGarageComponent } from './pages/user-garage/user-garage.component';

const routes: Routes = [
  {
    path:'',
    component:UserGarageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarageRoutingModule { }
