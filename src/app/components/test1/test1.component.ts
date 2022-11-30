import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit {
  Color: string = 'red';
  Width: String = '100px';
  Height: String = '100px';
  Number: Number = 10;
  constructor() {}

  ngOnInit(): void {}
}
