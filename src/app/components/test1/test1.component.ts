import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit {
  Color: string = 'red';
  numbers: Number = 10;
  constructor() {}

  ngOnInit(): void {}
}
