import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDisableButton]'
})
export class DisableButtonDirective {

  constructor(
    private element: ElementRef
  ) {}

  @HostListener('click')
  onClick(): void {

    this.element.nativeElement.disabled = true;

    setTimeout(() => {

      this.element.nativeElement.disabled = false;

    }, 3000);

  }
}