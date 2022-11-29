import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  userId!: any;
  constructor() {}
  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.userId = localStorage.getItem('currentUser');
    } else {
      this.userId = false;
    }
  }
}
