
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, DateTime, Icon } from 'ionic-angular';
import { ActivitiesProvider } from './../../providers/activities/activities';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-activity-create',
  templateUrl: 'activity-create.html',
})
export class ActivityCreatePage {

  activity: any;
  form: FormGroup;
  name: string;
  color: string;
  icon: Icon;
  group: '';
  // target
  targetMeasuringhow: string;
  amountTargetNumber: number;
  amountTargetTimeframe: string;
  timeTargetNumber: number;
  timeTargetUnit: string;
  timeTargetTimeframe: string;

  complete: boolean = false;

  // new = '';

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private FormBuilder: FormBuilder, private provider: ActivitiesProvider,
    private toast: ToastController) {

    this.activity = this.navParams.data.activity || { };
    this.addActivity();
  }

  addActivity() {
      this.form = this.FormBuilder.group({
        key: [this.activity.key],
        name: [this.activity.name, Validators.required],
        color: [this.activity.color],
        icon: [this.activity.icon],
        group: [this.activity.group],
        // target
        targetMeasuringhow: [this.activity.targetMeasuringhow],
        amountTargetNumber: [this.activity.amountTargetNumber],
        amountTargetTimeframe: [this.activity.amountTargetTimeframe],
        timeTargetNumber: [this.activity.timeTargetNumber],
        timeTargetUnit: [this.activity.timeTargetUnit],
        timeTargetTimeframe: [this.activity.timeTargetTimeframe],

        complete: [this.activity.complete],

      });
    }

    onSubmit () {
      if (this.form.valid) {
        this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Activity Created.', duration: 2000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Activity Error.', duration: 3000 }).present();
          console.error(e);
        })
      }
    }

}
