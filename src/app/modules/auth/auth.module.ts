import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmAccountComponent } from './pages/confirm-account/confirm-account.component';
import { PasswordComponent } from './pages/password/password.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ConfirmAccountComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
