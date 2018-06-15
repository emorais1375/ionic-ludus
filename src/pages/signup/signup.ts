import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  apiUrl = '/api';
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};

  constructor(public navCtrl: NavController, public http: Http, private platform: Platform) {
    if (this.platform.is("cordova")) { 
      this.apiUrl = "http://10.42.0.1/PHP-Slim-Restful/api";
    }
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(this.apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  signup() {
    //Api connections
    this.postData(this.userData,'/signup').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.navCtrl.push(HomePage);
      }
      else{ 
        console.log("User already exists");
      }
    }, err => {
      // Error log
    });
  }
}
