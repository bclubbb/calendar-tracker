import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListActivitiesPage } from './list-activities';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    ListActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListActivitiesPage),
    SuperTabsModule
  ],
})
export class ListActivitiesPageModule {}
