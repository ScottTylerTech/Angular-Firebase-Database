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
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GuestListComponent } from './pages/guest-list/guest-list.component';
import { InformationComponent } from './pages/information/information.component';
import { TaskComponent } from './resources/task/task.component';
import { TaskDialogComponent } from './resources/task-dialog/task-dialog.component';
import { MateiralModule } from './resources/mateiral/mateiral.module';
import { AppRoutingModule } from './resources/routing/routing.module';
import { HeaderComponent } from './resources/header/header.component';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//fire base
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/app/resources/environments/environment';
import { WeddingPartyComponent } from './pages/wedding-party/wedding-party.component';
import { PartyMemberComponent } from './resources/party-member/party-member.component';
import { BiographyComponent } from './resources/biography/biography.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent,
    HomeComponent,
    GuestListComponent,
    InformationComponent,
    HeaderComponent,
    WeddingPartyComponent,
    PartyMemberComponent,
    BiographyComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MateiralModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
