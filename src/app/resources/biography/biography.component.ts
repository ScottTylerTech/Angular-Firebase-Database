import { Component, Input, OnInit } from '@angular/core';
import { PartyMember } from '../party-member/party-member.component';

@Component({
  selector: 'member-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  @Input() member: PartyMember|null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
