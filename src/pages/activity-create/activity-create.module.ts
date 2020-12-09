import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityCreatePage } from './activity-create';

@NgModule({
  declarations: [
    ActivityCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityCreatePage),
  ],
})
export class ActivityCreatePageModule {}
