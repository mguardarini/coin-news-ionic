import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { GooglePlus } from '@ionic-native/google-plus';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,private googlePlus: GooglePlus) {
  }
  callTabs = TabsPage;
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1500,
      
    });
    loader.present();
    this.navCtrl.setRoot(TabsPage);
    this.googlePlus.login({})
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  
}
