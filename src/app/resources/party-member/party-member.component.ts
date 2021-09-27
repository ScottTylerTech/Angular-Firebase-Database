import { Component, EventEmitter, Input, Output } from '@angular/core';
// firestore
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-party-member',
  templateUrl: './party-member.component.html',
  styleUrls: ['./party-member.component.css']
})

export class PartyMemberComponent{
  @Input() member: PartyMember|null = null;
  @Output() edit = new EventEmitter<PartyMember>();

  public isExpanded: boolean = false;
  public bioIcon: string = 'expand_more';
  
  public bioClick(): void{
    this.bioIcon = (this.isExpanded) ? 'expand_less' : 'expand_more';
    this.isExpanded = !this.isExpanded;
  }
}

export interface PartyMember {
  firstName: string;
  lastName: string;
  title: string;
  biography: string;
}
