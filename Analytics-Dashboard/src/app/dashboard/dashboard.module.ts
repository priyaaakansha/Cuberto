/* eslint-disable max-len */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

import { Highchart1Component } from '../Components/highchart1/highchart1.component';
import { Highchart2Component } from '../Components/highchart2/highchart2.component';
import { Highchart3Component } from '../Components/highchart3/highchart3.component';
import { Highchart4Component } from '../Components/highchart4/highchart4.component';
import { Highchart5Component } from '../Components/highchart5/highchart5.component';
import { Highchart6Component } from '../Components/highchart6/highchart6.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
  ],
  declarations: [DashboardPage, Highchart1Component, Highchart2Component, Highchart3Component, Highchart4Component, Highchart5Component, Highchart6Component, ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardPageModule {}
