import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appNumberInput]',
})
export class NumberInputDirective {
  myColor!: string;
  @Input() set appNumberInput(number: Number) {
    // this.viewContainer.element.nativeElement.style.backgroundColor = color;
    // this.myColor = color;
    // if (!condition) {
    //   this.viewContainer.createEmbeddedView(this.templateRef);
    // } else {
    //   this.viewContainer.clear();
    // }
    for (let index = 0; index < number; index++) {
      this.el.nativeElement.innerHTML = ' <div class="item item1"></div>';
    }
  }
  constructor(
    private el: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    // console.log(this.viewContainer.element);
  }

  ngOnInit() {
    this.el.nativeElement.innerHTML = ' <div class="item item1"></div>';
  }
}
