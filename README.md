## Injecting and Capturing Data

### HTML
```html
<mat-form-field>
  <mat-label>Number of Guests</mat-label>
  <input matInput [(ngModel)]="data.task.numberOfGuests" />
</mat-form-field>
```
### Component Code
```js
constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) {}
```
