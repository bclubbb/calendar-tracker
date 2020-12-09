import { ActivitiesProvider } from './../../providers/activities/activities';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { SuperTabsController } from 'ionic2-super-tabs/dist/providers/super-tabs-controller';

@IonicPage()
@Component({
  selector: 'page-activity-list',
  templateUrl: 'activity-list.html',
})

export class ActivityListPage {
  activities: Observable<any>;
  // Supertabs RootNavCtrl
  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ActivitiesProvider,
    private toast: ToastController, private superTabsCtrl: SuperTabsController) {
      // use rootNavCtrl to have the page on supertabs take up the entire screen, not just under where the tabs.
      this.rootNavCtrl = this.navParams.get('rootNavCtrl');

      this.activities = this.provider.getAll();
  }
  // createActivity() {
  //   this.rootNavCtrl.push('ActivityCreatePage');
  // }

  viewActivityLog(activity: any) {
    this.rootNavCtrl.push('ActivityLogPage', {activity });
  }
  viewActivityDetails(activity: any) {
    this.rootNavCtrl.push('ActivityViewPage', {activity });
  }

  editActivity(activity : any) {
    this.rootNavCtrl.push('ActivityCreatePage', {activity});
  }


}
