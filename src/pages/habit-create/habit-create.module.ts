import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitCreatePage } from './habit-create';

@NgModule({
  declarations: [
    HabitCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(HabitCreatePage),
  ],
})
export class HabitCreatePageModule {}
