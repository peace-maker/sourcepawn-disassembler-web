import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightByte]'
})
export class HighlightByteDirective {

  constructor(private el: ElementRef) { }

  @Input('appHighlightByte') partnerElement: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;

    // Change the background of the other element as well.
    if (this.partnerElement) {
      const partner = <HTMLElement>document.getElementById(this.partnerElement);
      partner.style.backgroundColor = color;
    }
  }
}
