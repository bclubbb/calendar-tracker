import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { TaskProvider } from '../../providers/task/task';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {
  tasks: Observable<any>;
  // Supertabs RootNavCtrl
  rootNavCtrl: NavController;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: TaskProvider,
    private toast: ToastController, private superTabsCtrl: SuperTabsController) {
      // use rootNavCtrl to have the page on supertabs take up the entire screen, not just under where the tabs.
      this.rootNavCtrl = this.navParams.get('rootNavCtrl');

      this.tasks = this.provider.getAll();
  }

}
