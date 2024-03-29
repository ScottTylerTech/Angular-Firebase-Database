/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../task/task';

// disable button
// https://stackoverflow.com/questions/46321558/how-do-i-disable-the-button-if-the-input-box-is-empty-and-enable-when-field-is-f/46322583

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent {
  public submitDisabled: boolean = true;

  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData) {
      console.log("name ", data.task.name);
    }

  cancel(): void {
    //this.data.task.name = this.backupTask.name;
    //this.data.task.description = this.backupTask.description;
    //this.data.task.numberOfGuests = this.backupTask.numberOfGuests;
    //this.data.task.rsvp = this.backupTask.rsvp;
    this.dialogRef.close(this.data);
  }

  //[mat-dialog-close]="{task: data.task }"
  close(): void{
    this.dialogRef.close(this.data);
  }
}

export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}
