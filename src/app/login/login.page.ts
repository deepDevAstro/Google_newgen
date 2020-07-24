import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(public navCtrl: NavController,private googlePlus: GooglePlus,private storage: Storage,private router: Router) { }

  ngOnInit() {
  }

 async onLoginClick(){
   await this.googlePlus.login({})
  .then(res => {
    console.log('res ' + res)
    alert(JSON.stringify(res));
    this.storeData(res); 
  })
  .catch(err => console.error(err));
 
  }

  storeData(obj) {
    this.storage.set('data', JSON.stringify(obj));
    console.log('Going to HOMEPAGE')
    this.navCtrl.navigateForward('/home')

  }
}
