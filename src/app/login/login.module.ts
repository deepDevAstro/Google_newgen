import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HomePage } from '../home/home.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage, HomePage]
})
export class LoginPageModule {}
