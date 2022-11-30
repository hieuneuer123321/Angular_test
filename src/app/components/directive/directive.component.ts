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
  @Input() Mynumber!: Number;
  @Input() Mywidth!: String;
  @Input() Myheight!: String;
  @ViewChild('closebutton') closebutton!: any;
  @Output() countChanged: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (!changes.Mycolor.firstChange) {
      alert('First change: ');
    }
  }
  ngOnInit(): void {}
  onSubmit() {
    this.countChanged.emit([
      this.Mycolor,
      this.Mynumber,
      this.Mywidth,
      this.Myheight,
    ]);
    this.closebutton.nativeElement.click(); // đóng modal
  }
}
