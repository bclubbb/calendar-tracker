import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalPage } from './goal';
import { ComponentsModule } from './../../components/components.module';


@NgModule({
  declarations: [
    GoalPage,
  ],
  imports: [
    IonicPageModule.forChild(GoalPage),
    ComponentsModule
  ],
})
export class GoalPageModule {}
