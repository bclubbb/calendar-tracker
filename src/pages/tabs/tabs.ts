

import { Component } from '@angular/core';


import { ListActivitiesPage } from './../list-activities/list-activities';
import { GoalPage } from '../goal/goal';
import { TaskPage } from '../task/task';
import { TaskViewPage } from './../task-view/task-view';
import { IonicPage } from 'ionic-angular';

@IonicPage( { name: 'tabs-page' } )

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListActivitiesPage;
  tab2Root = GoalPage;
  tab3Root = TaskPage;
  tab4Root = TaskViewPage;

  constructor() {

  }
}
