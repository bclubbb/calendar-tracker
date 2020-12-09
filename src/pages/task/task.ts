import { TimerProgressComponent } from './../../components/timer-progress/timer-progress';
import { TimerComponent } from './../../components/timer/timer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TaskProvider } from './../../providers/task/task';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { SuperTabsController } from 'ionic2-super-tabs';


@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  tasks: Observable<any>;
  // Supertabs RootNavCtrl
  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: TaskProvider,
    private toast: ToastController, private superTabsCtrl: SuperTabsController) {
      // use rootNavCtrl to have the page on supertabs take up the entire screen, not just under where the tabs.
      this.rootNavCtrl = this.navParams.get('rootNavCtrl');

      this.tasks = this.provider.getAll();
  }
  createTask() {
    this.rootNavCtrl.push('TaskCreatePage');
  }

  viewTask(task: any) {
    this.rootNavCtrl.push('TaskViewPage', {task });
  }

  editTask(task : any) {
    // maneira 1
    this.rootNavCtrl.push('TaskCreatePage', {task});
  }

  removeTask(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Task Removed.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Error Removing Task.', duration: 3000 }).present();
        });
    }
  }

  // startTimer(key : any) {
  //   this.navCtrl.push('TaskCreatePage', {task});
  // }


}
