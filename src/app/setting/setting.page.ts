import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from '@ionic/storage';

import { Router } from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  userName: any ;
  userId: any ; 
  userImg : any ;
  content : any ;
  obj : any;
  userData: any;
  constructor(private storage: Storage,private router: Router,private route: ActivatedRoute,private googlePlus: GooglePlus) { 
    this.content = this.route.params.subscribe(params => {
      this.obj = params['obj']; 
 });
  }

  ngOnInit() {
    this.storage.get('data').then((val) => {        
      this.userData = JSON.parse(val);
      this.userImg = this.userData.imageUrl ;
      this.userId = this.userData.email
    this.userName = this.userData.displayName    
    }); 
    
  }

  onLoginClick(){
    this.googlePlus.logout().then( msg => {
        alert(msg); 
        this.router.navigate(['/login']);
      });
  }
}
