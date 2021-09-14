import { Component, OnInit } from '@angular/core';
import { PartyMember } from 'src/app/resources/party-member/party-member.component';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.css']
})
export class WeddingPartyComponent implements OnInit {

  public bride: PartyMember = {name: 'Jessica', title: 'The Bride',};
  public groom: PartyMember = {name: 'Scott', title: 'The Groom',};

  public bridesmaids: PartyMember[] = [
    {name: 'Jordyn',
    title: 'Maid of Honor',},
    {name: 'Katie',
    title: 'Bridesmaid',},
    {name: 'Kate',
    title: 'Bridesmaid',},
  ];

  public groomsmen: PartyMember[] = [
    {name: 'Jake',
    title: 'Best Man',},
    {name: 'Brent',
    title: 'Groomsman',},
    {name: 'Bob',
    title: 'Groomsman',},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
