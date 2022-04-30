import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardScreenRoutingModule } from './dashboard-screen-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuModule } from '../componentes/menu/menu.module';
import { SettingsModule } from '../componentes/settings/settings.module';
import { CartaoComponent } from './cartao/cartao.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    CartaoComponent
  ],
  imports: [
    CommonModule,
    DashboardScreenRoutingModule,
    MenuModule,
    SettingsModule,
    FormsModule
  ]
})
export class DashboardScreenModule { }
