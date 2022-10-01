import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path:'auth',
     loadChildren:() => import('@modules/auth/auth.module').then(x=>x.AuthModule)
   },
   {
    path:'cars',
     loadChildren:() => import('@modules/garage/garage.module').then(x=>x.GarageModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
