import { NgModule, Component } from '@angular/core';
import { IonicPageModule,LoadingController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    GooglePlus,
  ],
})

@Component({
  templateUrl: 'login.html'
})

export class LoginPageModule {

  constructor(public loadingCtrl: LoadingController) { }

 
}
