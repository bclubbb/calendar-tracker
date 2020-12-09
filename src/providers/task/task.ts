import { Task } from './../../shared/models/task.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class TaskProvider {
  private PATH = 'tasks/';

  constructor(private db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(t => ({ key: t.payload.key, ...t.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(t => {
        return { key: t.key, ...t.payload.val() };
      });
  }

  save(task: any) {
    return new Promise((resolve, reject) => {
      if (task.key) {
        this.db.list(this.PATH)
          // .update(task.key, new Task(
          //   task.title,
          //   task.description,
          //   task.duedate,
          //   task.duetime,
          //   task.complete,
          // ))
          .update(task.key, {
            title: task.title,
            description: task.description,
            duedate: task.duedate,
            duetime: task.duetime,
            complete: task.complete,
          })
          .then(() => resolve())
          .catch((e) => reject(e));
        } else {
          this.db.list(this.PATH)
            .push({
              title: task.title,
              description: task.description,
              duedate: task.duedate,
              duetime: task.duetime,
              complete: task.complete,
             })
            .then(() => resolve());
        }
      })
    }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}


// ----Maneira 2 atualizando pelo objeto----
// if (activity.key) {
//   this.db.object(this.PATH + contact.key)
//     .update({ title: activity.title, description: activity.description })
//     .then(() => resolve())
//     .catch((e) => reject(e));

// ao inves de .update, da pra usar .set, ai ele substitui o objeto inteiro no servidor e não so o que esta passando
