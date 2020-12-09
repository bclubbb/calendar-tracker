import { Activity } from './../../shared/models/activity.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class ActivitiesProvider {
  private PATH = 'activities/'

  constructor(private db: AngularFireDatabase) {
  }


  // map a de activities. era C de contatos no exemplo
  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => ({ key: a.payload.key, ...a.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(a => {
        return { key: a.key, ...a.payload.val() };
      });
  }

  save(activity: any) {
    return new Promise((resolve, reject) => {
      if (activity.key) {
        this.db.list(this.PATH)
          .update(activity.key, {
            name: activity.name,
            color: activity.color,
            icon: activity.icon,
            group: activity.group,
            targetMeasuringhow: activity.targetMeasuringhow,
            amountTargetNumber: activity.amountTargetNumber,
            amountTargetTimeframe: activity.amountTargetTimeframe,
            timeTargetNumber: activity.timeTargetNumber,
            timeTargetUnit: activity.timeTargetUnit,
            timeTargetTimeframe: activity.timeTargetTimeframe,
            complete: activity.complete,
        })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({
            name: activity.name,
            color: activity.color,
            icon: activity.icon,
            group: activity.group,
            targetMeasuringhow: activity.targetMeasuringhow,
            amountTargetNumber: activity.amountTargetNumber,
            amountTargetTimeframe: activity.amountTargetTimeframe,
            timeTargetNumber: activity.timeTargetNumber,
            timeTargetUnit: activity.timeTargetUnit,
            timeTargetTimeframe: activity.timeTargetTimeframe,
            complete: activity.complete,
           })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    // se voce retirar a (key) do remove, voce deleta todos os objetos, nao so o selecionado.
    return this.db.list(this.PATH).remove(key);
  }
}

