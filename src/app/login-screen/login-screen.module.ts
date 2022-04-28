import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginScreenRoutingModule } from './login-screen-routing.module';
import { LoginScreenComponent } from './login-screen.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginScreenComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginScreenRoutingModule
  ],
  exports: [
    LoginScreenComponent
  ]
})
export class LoginScreenModule { }
