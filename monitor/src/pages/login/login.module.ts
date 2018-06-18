import { NgModule, Component } from '@angular/core';
import { IonicPageModule,LoadingController } from 'ionic-angular';

import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})

@Component({
  templateUrl: 'login.html'
})

export class LoginPageModule {

  constructor(public loadingCtrl: LoadingController) { }

 
}
