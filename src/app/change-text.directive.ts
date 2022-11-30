import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appChangeText]',
})
export class ChangeTextDirective implements AfterViewInit {
  // @Input() ttClass!: string;
  @Input() inputColor!: string;
  @Input() inputNumber!: Number;
  @Input() inputWidth!: String;
  @Input() inputHeight!: String;
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.inputColor;
    this.elementRef.nativeElement.style.width = this.inputWidth;
    this.elementRef.nativeElement.style.height = this.inputHeight;
  }
  ngOnInit() {}
}
