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

import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


// firestore
import { AngularFirestore } from '@angular/fire/firestore';
import { removeSummaryDuplicates } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  pageTitle: string = 'Shirley - Ceplina Wedding';
  currentLink: string = '';
  activeLinkIndex = -1;

  background: ThemePalette = undefined;
  navLinks: any[];

  public ngRouter: Router;

  constructor(private router: Router){
    this.ngRouter = router;
    this.navLinks = [
      {
          label: 'Home',
          link: './home',
          index: 0
      }, {
          label: 'Information',
          link: './info',
          index: 1
      }, {
          label: 'Wedding Party',
          link: './party',
          index: 2
      }, {
          label: 'Guests',
          link: './guest-list',
          index: 3
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
