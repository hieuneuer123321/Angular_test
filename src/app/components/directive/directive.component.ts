import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  @Input() Mycolor!: string;
  @Input() Mynumber!: Number;
  @Input() Mywidth!: String;
  @Input() Myheight!: String;

  constructor() {}

  ngOnInit(): void {
    // this.test();
  }
  test() {}
}
