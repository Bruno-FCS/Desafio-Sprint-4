import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { HomeComponent } from './home/home.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeScreenRoutingModule,
    CabecalhoModule
  ]
})
export class HomeScreenModule { }
