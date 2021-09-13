import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GuestListComponent } from "../guest-list/guest-list.component";
import { HomeComponent } from "../home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // first match wins
  { path: 'guest-list', component: GuestListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, //404
];

export const appRouting = RouterModule.forRoot(routes);



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
