import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // for count down timer
  // https://www.youtube.com/watch?v=dtKciwk_si4&t=1880s
  // https://javascript.plainenglish.io/implement-a-countdown-timer-with-rxjs-in-angular-3852f21a4ea0
  private subscription: Subscription;
  private colorFlash: Subscription;
  constructor(){this.subscription = new Subscription, this. colorFlash = new Subscription}

  public pageTitle = 'Home';
  public timeDifference: number = 0;
  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  private colorCheck: any = document.getElementById("seconds")?.style.color;


  milliSecondsInASecond= 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public dateNow = new Date();
  public weddingDate = new Date('September 18, 2021 15:00:00');

  private getTimeDifference () {
    this.timeDifference = this.weddingDate.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference: number) {
    this.seconds = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutes = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hours = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.days = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  private flashText(){
    this.colorCheck = (this.colorCheck =='white') ? 'red' : 'white';
  }

  ngOnInit() {
    this.subscription = interval(1000)
        .subscribe(x => { this.getTimeDifference();
    });

    this.colorFlash = interval(500).subscribe(x =>{
      this.flashText();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.colorFlash.unsubscribe();
  }
}
