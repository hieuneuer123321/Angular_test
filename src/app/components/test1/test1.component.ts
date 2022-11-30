import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit, OnChanges {
  Color: string = 'red';
  Width: String = '100px';
  Height: String = '100px';
  Number: number = 10;
  // Color!: string ;
  // Width!: String ;
  // Height!: String;
  // Number!: number ;
  @ViewChild('closebutton') closebutton!: any;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
  countChangedHandler(data: string): void {
    this.Color = data[0];
    this.Number = Number(data[1]);
    this.Width = data[2];
    this.Height = data[3];
  }
  add() {
    this.closebutton.nativeElement.click();
  }
  onSubmit() {}
}
