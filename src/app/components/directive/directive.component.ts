import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Block } from 'src/app/modules/block';
@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit, OnChanges {
  @Input() ArrBlock!: Array<Block>;
  @ViewChild('closebutton') closebutton!: any;
  Mycolor: string = 'test';
  Mynumber!: number;
  Mywidth!: String;
  Myheight!: String;
  index!: number;
  // @Output() countChanged: EventEmitter<any> = new EventEmitter();
  // a = new Number(1);
  // a!: number;
  // fakeArray!: any;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    // this.a = this.Mynumber;
    // this.fakeArray = new Array(5);
  }
  setvalue(e: any, number: number) {
    this.index = number;
    this.Mycolor = this.ArrBlock[number].color;
    this.Mynumber = this.ArrBlock[number].number.length;
    this.Mywidth = this.ArrBlock[number].width;
    this.Myheight = this.ArrBlock[number].height;
  }
  onSubmit() {
    console.log(this.index);
    // this.countChanged.emit([
    //   this.Mycolor,
    //   this.Mynumber,
    //   this.Mywidth,
    //   this.Myheight,
    // ]);
    const arrayTemp = [...this.ArrBlock];
    const blockUpdate: Block = arrayTemp[this.index];
    blockUpdate.color = this.Mycolor;
    blockUpdate.number = new Array(this.Mynumber);
    blockUpdate.width = this.Mywidth;
    blockUpdate.height = this.Myheight;
    console.log(blockUpdate);
    this.closebutton.nativeElement.click(); // đóng modal
  }
}
