import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  docUpload : any = [];
  SERVER_URL : any = "http://ecmnext-qa.azurewebsites.net/EasyCMRest/uploadDocument";
  obj : any;
  userImg : any;
  userData: any;
  constructor(private storage: Storage,private camera: Camera, public actionSheetController: ActionSheetController,
    private file: File, private httpClient: HttpClient,private route: ActivatedRoute,private router: Router) { 
      
    }

      ngOnInit() {
        
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad')
     
    }

    ionViewWillEnter() {
      console.log('ionViewWillEnter')
    }

    ionViewDidEnter() {
      console.log('ionViewDidEnter');
      this.storage.get('data').then((val) => { 
        console.log('VALUE : ' + val)       
        this.userData = JSON.parse(val);
        this.userImg = this.userData.imageUrl ;            
      }); 
    }

    settingPage() {
      this.router.navigate(['/setting']);
    }

    uploadFile(data) {
      var file = data.files[0];
      var reader: FileReader = new FileReader();
      reader.onload = (readerEvt: any) => {
        var binaryString = readerEvt.target.result;        
        this.callUploadURL(binaryString,file)
      };

      reader.readAsDataURL(file);

      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
      
    }

    callUploadURL(base64File,file){
      const formData = new FormData();
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', 'Bearer 20_1728535755457300').set( 'Content-Type', 'multipart/form-data').set("Access-Control-Allow-Headers", "*");
    //headers = headers.set('Authorization': 'Bearer 20_1728535755457300', 'Content-Type': 'multipart/form-data');
     // const headers = { 'Authorization': 'Bearer 20_1728535755457300', 'Content-Type': 'multipart/form-data',} 
      formData.append('file', file);      
      formData.append('uploadIn', 'Asset');
      this.httpClient.post<any>(this.SERVER_URL, formData,{headers}).subscribe(
        (res) => {
          if(res.statusMessage == "Success"){
          alert('File Uploaded !! ');          
        }
        this.docUpload.push({
          name : file.name,
          size : file.size,
          type : file.type
        });
        console.log("DOCUPLOAD : " + this.docUpload)
        },
        (err) => {
          console.log(err);
          this.docUpload.push({
            name : file.name,
            size : file.size,
            type : file.type
          });
          console.log("DOCUPLOAD from Err : " + this.docUpload)
        }
      );
    }

    onUpload(data) {
      data.click()
    }
}
