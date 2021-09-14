import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
          link: './information',
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
