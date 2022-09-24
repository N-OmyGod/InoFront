import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    HeaderComponent,
    SideMenuComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
