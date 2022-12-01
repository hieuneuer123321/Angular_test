import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Block } from 'src/app/modules/block';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit, OnChanges {
  Color!: string;
  Width!: String;
  Height!: String;
  Number!: String;
  arrayBlock: Array<Block> = [];
  @ViewChild('closebutton') closebutton!: any;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
  // countChangedHandler(data: string): void {
  //   this.block.color = data[0];
  //   this.block.number = Number(data[1]);
  //   this.block.width = data[2];
  //   this.block.height = data[3];
  // }
  add() {
    const block: Block = { color: '', number: [], height: '', width: '' };
    const fakeArray = new Array(Number(this.Number));
    block.width = this.Width;
    block.height = this.Height;
    block.number = fakeArray;
    block.color = this.Color;
    this.arrayBlock.push(block);
    this.closebutton.nativeElement.click();
    this.Width;
    this.Height = '';
    this.Number = '';
    this.Color = '';
    this.Width = '';
  }
}
