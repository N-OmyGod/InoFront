import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [
   {
    path:'auth',
    loadChildren:() => import('@modules/auth/auth.module').then(x=>x.AuthModule),
   },
   {
     path:'cars',
     loadChildren:() => import('@modules/garage/garage.module').then(x=>x.GarageModule),
     canActivate: [AuthGuard],
     canActivateChild: [AuthGuard]
   },
   {
    path: 'profile',
    loadChildren: ()=> import('@modules/profile/profile.module').then(x=>x.ProfileModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
