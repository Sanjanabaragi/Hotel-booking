import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(
    private element: ElementRef
  ) {}

  @HostListener('input')
  onInput(): void {

    this.element.nativeElement.value =
      this.element.nativeElement.value.toUpperCase();

  }
}