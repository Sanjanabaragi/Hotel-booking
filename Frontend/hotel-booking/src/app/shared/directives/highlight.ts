import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor = '#dbeafe';

  constructor(
    private element: ElementRef
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {

    this.element.nativeElement.style.backgroundColor =
      this.highlightColor;

  }

  @HostListener('mouseleave')
  onMouseLeave(): void {

    this.element.nativeElement.style.backgroundColor =
      '';

  }
}