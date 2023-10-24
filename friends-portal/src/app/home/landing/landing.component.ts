import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{
  icon = 'assets/icons/Gaming-amico.svg';
  show = false;
  greeting: any;

  constructor() {
    this.greeting = this.getGreeting();
  }
  ngOnInit() {
    this.getGreeting()
  }


  showtext() {
    this.show = !this.show;
    console.log('clicked')
  }

  getGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }
}
