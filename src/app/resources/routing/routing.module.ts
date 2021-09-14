import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { WeddingPartyComponent } from 'src/app/pages/wedding-party/wedding-party.component';
import { GuestListComponent } from "../../pages/guest-list/guest-list.component";
import { HomeComponent } from "../../pages/home/home.component";
import { InformationComponent } from '../../pages/information/information.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // first match wins
  { path: 'guest-list', component: GuestListComponent },
  { path: 'information', component: InformationComponent },
  { path: 'wedding-party', component: WeddingPartyComponent },
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
