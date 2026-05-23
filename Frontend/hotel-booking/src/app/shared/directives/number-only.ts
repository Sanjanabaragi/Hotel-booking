import {
  Directive,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): boolean {

    const charCode =
      event.which
      ? event.which
      : event.keyCode;

    if (charCode < 48 || charCode > 57) {

      event.preventDefault();

      return false;
    }

    return true;
  }
}