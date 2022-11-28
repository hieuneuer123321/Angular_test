import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  @Input() Mycolor!: string;
  @Input() Mynumber!: Number;
  innerHTML: string = '  <div class="item item5"></div>';

  constructor() {}

  ngOnInit(): void {
    // this.test();
  }
  test() {
    for (let index = 0; index < this.Mynumber; index++) {
      this.innerHTML += '  <div class="item item5"></div>';
    }
  }
}
