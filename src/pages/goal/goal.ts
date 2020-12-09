import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html',
})
export class GoalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // Use this to create a new navigation page. use pop to remove it

  createGoal() {
    this.navCtrl.push('GoalCreatePage');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalPage');
  }

}
