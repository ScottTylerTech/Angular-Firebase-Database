## Observables
[`Observables'](https://angular.io/guide/observables) provide support for passing messages between parts of your application.

### BehaviorSubject vs Observable
`BehaviorSubject` is a type of [`subject`](https://rxjs.dev/guide/subject), a subject is a special type of observable so you can subscribe to messages like any other observable. The unique features of BehaviorSubject are:

* It needs an initial value as it must always return a value on subscription even if it hasn't received a `next()`.
* Upon subscription, it returns the last value of the subject. A regular observable only triggers when it receives an `onnext`.
* At any point, you can retrieve the last value of the subject in a non-observable code using the `getValue()` method.

Unique features of a subject compared to an observable are:
* It is an observer in addition to being an observable so you can also send values to a subject in addition to subscribing to it.

In addition, you can get an observable from behavior subject using the `asObservable()` method on `BehaviorSubject`.

`Observable` is a Generic, and `BehaviorSubject` is technically a sub-type of `Observable` because `BehaviorSubject` is an observable with specific qualities.

### Uses
#### Firebase Read / Write
Retriving a collection from the firebase:
```js
guestList = this.store.collection('guests').valueChanges({ idField: 'id' }) as Observable<Task[]>;
```

The main difference between `valueChanges()` and `get()`, is that with `get()`, you get the data only once, whereas `valueChanges()` (and snapshotChanges) is automatically fired whenever something changes in the database linked to that document/collection that you are listening to.

Add a new guest to the firebase:
```js
this.store.collection('guests').add(guest);
```

Running a firebase transaction:
```js
this.store.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.store.collection(event.previousContainer.id).doc(item.id).delete(),
        this.store.collection(event.container.id).add(item),
      ]);
      return promise;
    });
```

Promises are a modern alternative to callbacks for asynchronous code. A promise represents an operation and the future value it may return. It also lets you propagate errors similar to try/catch in synchronous code.

[[Read More.]](https://firebase.google.com/docs/functions/terminate-functions)

## Injecting and Capturing Data

Using `ngModel` to create an instance of the domain model that binds to the dom. This allows for using input fields and saving the values to the ng component.

![Form Dialog Box](src/writeup/formDialog.png)

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

## Module Routing
In a single-page app, you change what the user sees by showing or hiding portions of the display that correspond to particular components, rather than going out to the server to get a new page. As users perform application tasks, they need to move between the different views that you have defined.

The [`Router`](https://angular.io/guide/routing-overview) and `RouterModule` is used to handle the navigation from one view to the next. The `Router` enables navigation by interpreting a browser URL as an instruction to change the view.



### Routes
Routes are matched on a first-hit basis and should be ordered as so when creating the routes array.

```js
const routes: Routes = [
  { path: 'home', component: HomeComponent }, // first match wins
  { path: 'guest-list', component: GuestListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // 404
];
```

It is important to have the last two paths.  The first is a mis-match url incase someone enters a bad url and the other is wildcare to prevent access to url paths not listed in the `Router`.

The `RouterModule` component is imported with the specified route array and then exported.  The `router-out` can not be called in the html file as a selector with the appropriate component displayed within.

### HTML
```html
<router-outlet></router-outlet>
```

## Connecting to Firebase
The api key is stored in the app environment and initalized in the main app module.

### app.module.js
```js
@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
  ],
})
```

### environment.js
```js
export const environment = {
  production: false,
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
};
```

## Managing Dependencies
While still learning npm and angular, it was extremely easy to install or run the wrong or incompatible version of a dependency.  Especially when following along with tutorials, even ones that are only a few months old could be using a different version of a dependency.  Angular and AngularFire --specifically-- have mixed compatibility.

When installing or adding new dependencies via the CLI, you can flag it with `--save` to added it to the package.json file.  This is handy for when pull a fresh repository because when you run the command `npm install` in the project folder, it will install and add all of the dependencies for the project.

```json
"dependencies": {
    "@angular/fire": "^6.0.2",
    "firebase": "^7.13.1",
    "@angular/animations": "11.2.2",
    "@angular/cdk": "11.2.8",
    "@angular/common": "11.2.2",
    "@angular/compiler": "11.2.2",
    "@angular/core": "11.2.2",
    "@angular/forms": "11.2.2",
    "@angular/material": "11.2.8",
    "@angular/platform-browser": "11.2.2",
    "@angular/platform-browser-dynamic": "11.2.2",
    "@angular/router": "11.2.2",
    "rxjs": "~6.6.7",
    "tslib": "^2.0.0",
    "zone.js": "~0.11.4"
  },
```

