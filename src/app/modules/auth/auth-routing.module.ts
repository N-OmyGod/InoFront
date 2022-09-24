import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmAccountComponent } from './pages/confirm-account/confirm-account.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordComponent } from './pages/password/password.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'sign-in', component:RegistrationComponent},
  {path: 'confirm', component:ConfirmAccountComponent},
  {path: 'add-password', component:PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
