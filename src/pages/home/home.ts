import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { QuestionDetailsPage } from '../question-details/question-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userDetails: any;
  constructor(public navCtrl: NavController, public app: App) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
  }

  openTips() {
    this.navCtrl.push(QuestionDetailsPage);
  }

  backToLogin() {
    console.log("sair");
    const root = this.app.getRootNav();
    root.popToRoot();    
  }

  logout() {
  	//Api Token
    localStorage.clear();
    console.log("vai sair");
    setTimeout(() => this.backToLogin(), 1000);
  }

}
