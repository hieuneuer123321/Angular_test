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

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit, OnChanges {
  @Input() Mycolor!: string;
  @Input() Mynumber!: number;
  @Input() Mywidth!: String;
  @Input() Myheight!: String;
  @ViewChild('closebutton') closebutton!: any;
  // @Output() countChanged: EventEmitter<any> = new EventEmitter();
  // a = new Number(1);
  a!: number;
  fakeArray!: any;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.a = this.Mynumber;
    this.fakeArray = new Array(this.a);
  }
  onSubmit() {
    // this.countChanged.emit([
    //   this.Mycolor,
    //   this.Mynumber,
    //   this.Mywidth,
    //   this.Myheight,
    // ]);
    console.log(typeof 10);
    console.log(typeof this.Mynumber);
    console.log(typeof this.a);
    console.log(this.fakeArray);
    this.closebutton.nativeElement.click(); // đóng modal
  }
}
