import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
  AfterViewInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appChangeText]',
})
export class ChangeTextDirective implements AfterViewInit, OnChanges {
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
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.inputColor && !changes.inputColor.firstChange) {
      this.elementRef.nativeElement.style.backgroundColor =
        changes.inputColor.currentValue;
    }
    if (changes.inputWidth && !changes.inputWidth.firstChange) {
      this.elementRef.nativeElement.style.width =
        changes.inputWidth.currentValue;
    }
    if (changes.inputHeight && !changes.inputHeight.firstChange) {
      this.elementRef.nativeElement.style.height =
        changes.inputHeight.currentValue;
    }
    // if (!changes.inputNumber.firstChange) {
    //   this.elementRef.nativeElement.style.backgroundColor =
    //     changes.inputNumber.currentValue;
    // }
  }
  ngOnInit() {}
}
