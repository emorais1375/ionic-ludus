import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-question-details',
  templateUrl: 'question-details.html',
})
export class QuestionDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
