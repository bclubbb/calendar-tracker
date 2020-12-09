import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TimerComponent } from './timer/timer';
import { TimerProgressComponent } from './timer-progress/timer-progress';

@NgModule({
	declarations: [TimerComponent,
    TimerProgressComponent],
	entryComponents: [TimerComponent,
    TimerProgressComponent],
	imports: [IonicModule],
	exports: [TimerComponent,
    TimerProgressComponent, ]
})
export class ComponentsModule {}
