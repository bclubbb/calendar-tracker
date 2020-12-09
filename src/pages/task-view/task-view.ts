import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Task } from './../../shared/models/task.model';
import { TaskProvider } from './../../providers/task/task';


@IonicPage()
@Component({
  selector: 'page-task-view',
  templateUrl: 'task-view.html',
})
export class TaskViewPage {
  task: Task;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: TaskProvider, private toast: ToastController) {

    this.task = this.navParams.data.task;

  }

  taskComplete() {
    // this.provider.save.TaskComplete {}
    console.log('task complete log')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskViewPage');
  }

}
