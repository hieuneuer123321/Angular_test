import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit, OnChanges {
  Color: string = 'red';
  Width: String = '100px';
  Height: String = '100px';
  Number: Number = 10;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {}
  countChangedHandler(data: string): void {
    console.log(data);
    console.log(data[0]);
    this.Color = data[0];
    this.Number = Number(data[1]);
    this.Width = data[2];
    this.Height = data[3];
  }
}
