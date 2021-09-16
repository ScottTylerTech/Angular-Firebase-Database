import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-party-member',
  templateUrl: './party-member.component.html',
  styleUrls: ['./party-member.component.css']
})
export class PartyMemberComponent{
  @Input() member: PartyMember|null = null;
  @Output() edit = new EventEmitter<PartyMember>();

}

export interface PartyMember {
  name: string;
  title: string;
}
