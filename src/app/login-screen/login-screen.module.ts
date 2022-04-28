import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginScreenRoutingModule } from './login-screen-routing.module';
import { LoginScreenComponent } from './login-screen.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginScreenComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginScreenRoutingModule,
    FormsModule
  ],
  exports: [
    LoginScreenComponent
  ]
})
export class LoginScreenModule { }
