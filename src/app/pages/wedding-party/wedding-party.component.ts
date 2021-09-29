import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PartyMember } from 'src/app/resources/party-member/party-member.component';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.css']
})
export class WeddingPartyComponent implements OnInit {

  public bride: PartyMember = {firstName: 'Jessica', lastName: 'Ceplina', title: 'The Bride', biography: '', bioPic: '',};
  public groom: PartyMember = {firstName: 'Scott', lastName: 'Shirley', title: 'The Groom', biography: '', bioPic: '',};

  public bridesmaids = this.store.collection('bridesmaids').valueChanges({ idField: 'id' }) as unknown as Observable<PartyMember[]>;
  public groomsmen = this.store.collection('groomsmen').valueChanges({ idField: 'id' }) as unknown as Observable<PartyMember[]>;

  /*
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
  */

  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
  }

}
