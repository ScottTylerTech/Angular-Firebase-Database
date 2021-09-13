## Injecting and Capturing Data

Using `ngModel` to create an instance of the domain model that binds to the dom. This allows for using input fields and saving the values to the ng component.

![Form Dialog Box](/writeup/formDialog.png)

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
