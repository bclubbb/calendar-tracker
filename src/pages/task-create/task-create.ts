import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, DateTime } from 'ionic-angular';
import { TaskProvider } from './../../providers/task/task';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-task-create',
  templateUrl: 'task-create.html',
})
export class TaskCreatePage {

  task: any;
  title: string;
  description: string;
  form: FormGroup;
  duedate: Date;
  duetime: DateTime;
  initiative: '';
  complete: boolean = false;
  // newTask = '';

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private FormBuilder: FormBuilder, private provider: TaskProvider,
    private toast: ToastController) {

    this.task = this.navParams.data.task || { };
    this.addTask();
  }

    addTask() {
      this.form = this.FormBuilder.group({
        key: [this.task.key],
        title: [this.task.title, Validators.required],
        description: [this.task.description],
        duedate: [this.task.duedate],
        duetime: [this.task.duetime],
        initiative: [this.task.initiative],
        complete: [this.task.complete],

      });
    }

    onSubmit () {
      if (this.form.valid) {
        this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Task Created.', duration: 2000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Task Error.', duration: 3000 }).present();
          console.error(e);
        })
      }
    }
  // goBack() {
  //   this.navCtrl.pop();
  // }


}



    // Add a new Todo from the newItem variabke
    // addTask() {
      // console.log(this.title, this.description, this.duedate.value, this.duetime.value)
      // Only add if the text is set
      // if (this.newTask !== '') {
        // Push to our todos array
        // this.tasks.push(this.newTask);

        // Reset the variable of the input field
      //   this.newTask = '';
      // }
    // }



        // sample Firebase push
    // this.items = afDB.list('xxxx').valueChanges();
    // example on how to push a data object to a page
    // this.taskId = this.navParams.get('taskId');
