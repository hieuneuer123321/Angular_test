import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appChangeText]',
})
export class ChangeTextDirective {
  // @Input() ttClass!: string;
  myColor!: string;
  @Input() set appChangeText(color: string) {
    // this.viewContainer.element.nativeElement.style.backgroundColor = color;
    console.log(color);
    console.log(this.elementRef.nativeElement);
    // this.myColor = color;
    // if (!condition) {
    //   this.viewContainer.createEmbeddedView(this.templateRef);
    // } else {
    //   this.viewContainer.clear();
    // }
  }
  constructor(
    // private templateRef: TemplateRef<any>,
    // private viewContainer: ViewContainerRef,
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.style.backgroundColor = 'black';
    // console.log(this.viewContainer.element);
  }

  ngOnInit() {}
}
