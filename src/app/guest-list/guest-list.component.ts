import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { TaskDialogResult, TaskDialogComponent } from '../task-dialog/task-dialog.component';

import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

// firestore
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent{

  todo = this.store.collection('guests').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  inProgress = this.store.collection('inProgress').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  done = this.store.collection('done').valueChanges({ idField: 'id' }) as Observable<Task[]>;

  constructor(private dialog: MatDialog, private store: AngularFirestore) {}

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult) => {
        if (!result) {
          return;
        }
        result.task.rsvp = (result.task.rsvp) ? true : false;
        //result.task.invited = (result.task.rsvp) ? true : result.task.invited;
        this.storeTask(result.task);

      });
  }

  storeTask(guest: Task){

    if(guest.invited && guest.rsvp){
      // invited and rsvp?
      this.store.collection('done').add(guest);
      return;
    }else if(guest.invited){
      // invited?
      this.store.collection('inProgress').add(guest);
      return;
    }else{
      // added to list
      console.log(guest.name, " added to guests list");
      this.store.collection('guests').add(guest);
    }
  }

  editTask(list: 'done' | 'guests' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });

    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      if (result.delete) {
        console.log('delete task id:', task.id);
        this.store.collection(list).doc(task.id).delete();
      } else {
        //this.store.collection(list).doc(task.id).update(task);
        this.store.collection(list).doc(task.id).delete();
        result.task.invited = (result.task.rsvp) ? true : result.task.invited;
        this.storeTask(result.task);
      }
    });
  }

  drop(event: CdkDragDrop<Task[]>): void {

    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.previousContainer.data || !event.container.data) {
      return;
    }
    const item = event.previousContainer.data[event.previousIndex];

    this.store.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.store.collection(event.previousContainer.id).doc(item.id).delete(),
        this.store.collection(event.container.id).add(item),
      ]);
      return promise;
    });
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  makeid(length: number): string {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
    }
    return result;
  }
}
