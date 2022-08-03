import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateuserPageRoutingModule } from './createuser-routing.module';

import { CreateuserPage } from './createuser.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateuserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateuserPage]
})
export class CreateuserPageModule {}
