
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, DateTime, Icon } from 'ionic-angular';
import { ActivitiesProvider } from './../../providers/activities/activities';
import { AngularFireDatabase } from 'angularfire2/database';
import { Time } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-activity-log',
  templateUrl: 'activity-log.html',
})
export class ActivityLogPage {
  activities: Observable<any>;
  activityLog: any;
  form: FormGroup;
  activitySelect: string;
  startTime: DateTime;
  endTime: DateTime;
  duration: Time;
  myDate: String = new Date().toISOString();

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private FormBuilder: FormBuilder, private provider: ActivitiesProvider,
    private toast: ToastController) {

    this.activities = this.provider.getAll();
    this.activityLog = this.navParams.data.activityLog || { };
    this.addActivityLog();
  }


  addActivityLog() {
      this.form = this.FormBuilder.group({
        key: [this.activityLog.key],
        activitySelect: [this.activityLog.activitySelect, Validators.required],
        startTime: [this.activityLog.starTime],
        endTime: [this.activityLog.endTime],
        duration: [this.activityLog.duration],

      });
    }

    onSubmit () {
      if (this.form.valid) {
        this.provider.save(this.form.value)
        .catch((e) => {
          this.toast.create({ message: 'Log Error.', duration: 3000 }).present();
          console.error(e);
        })
      }
    }

}
