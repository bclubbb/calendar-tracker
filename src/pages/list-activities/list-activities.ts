import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';


@IonicPage()
@Component({
  selector: 'page-list-activities',
  templateUrl: 'list-activities.html',
})
export class ListActivitiesPage {

  pages = [
    { pageName: 'ActivityListPage', title: 'Activities', icon:'information', id:'goalsTab'},
    { pageName: 'TaskListPage', title: 'Tasks', icon:'information', id:'tasksTab'},
  ];

  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  onTabSelect(ev: any) {
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.pages[ev.index].id);
    }
  // }

  createActivity() {
    this.navCtrl.push('ActivityCreatePage');
  }
  createTask() {
    this.navCtrl.push('TaskCreatePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListActivitiesPage');
  }

}
