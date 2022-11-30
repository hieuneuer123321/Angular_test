import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'my-app';
  userId: any = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser') || '{}')
    : false;
  constructor() {}
  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.userId = localStorage.getItem('currentUser');
    } else {
      this.userId = false;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (localStorage.getItem('currentUser')) {
      this.userId = localStorage.getItem('currentUser');
    } else {
      this.userId = false;
    }
  }
}
