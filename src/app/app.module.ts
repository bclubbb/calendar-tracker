import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { MomentModule } from 'ngx-moment';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { TimerComponent } from './../components/timer/timer';
import { TimerProgressComponent } from './../components/timer-progress/timer-progress';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { TaskViewPageModule } from './../pages/task-view/task-view.module';
import { GoalViewPageModule } from './../pages/goal-view/goal-view.module';
import { TaskPageModule } from './../pages/task/task.module';
import { GoalPageModule } from './../pages/goal/goal.module';
import { TabsPageModule } from './../pages/tabs/tabs.module';
import { HabitCreatePageModule } from './../pages/habit-create/habit-create.module';
import { TaskCreatePageModule } from './../pages/task-create/task-create.module';
import { GoalCreatePageModule } from './../pages/goal-create/goal-create.module';
import { ComponentsModule } from '../components/components.module';
import { ListActivitiesPageModule } from '../pages/list-activities/list-activities.module';
import { ActivityViewPageModule } from './../pages/activity-view/activity-view.module';
import { ActivityCreatePageModule } from '../pages/activity-create/activity-create.module';
import { ActivityListPageModule } from './../pages/activity-list/activity-list.module';
import { TaskListPageModule } from './../pages/task-list/task-list.module';
import { ActivityLogPageModule } from './../pages/activity-log/activity-log.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { ActivitiesProvider } from '../providers/activities/activities';
import { InitiativesProvider } from '../providers/initiatives/initiatives';
import { TaskProvider } from '../providers/task/task';



export const firebaseConfig = {
  apiKey: "AIzaSyAAkRTlUAgy3EI77wAPEyoVHL-qtA4UDkg",
  authDomain: "olitracker-dev.firebaseapp.com",
  databaseURL: "https://olitracker-dev.firebaseio.com",
  projectId: "olitracker-dev",
  storageBucket: "olitracker-dev.appspot.com",
  messagingSenderId: "377676999205"
};

@NgModule({
  declarations: [
    MyApp,





  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MomentModule,
    ComponentsModule,
    TabsPageModule,
    ListActivitiesPageModule,
    ActivityCreatePageModule,
    ActivityViewPageModule,
    ActivityListPageModule,
    ActivityLogPageModule,
    GoalPageModule,
    TaskPageModule,
    GoalViewPageModule,
    TaskViewPageModule,
    TaskListPageModule,
    HabitCreatePageModule,
    TaskCreatePageModule,
    GoalCreatePageModule,




  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    ActivitiesProvider,
    InitiativesProvider,
    TaskProvider,
  ]
})
export class AppModule {}
