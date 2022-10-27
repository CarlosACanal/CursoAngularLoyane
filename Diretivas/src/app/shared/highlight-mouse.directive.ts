import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostBinding('style.backgroundColor') backgroundColor?: string;

             //('algumEvento') - São vários os eventos possiveis aqui. 
  @HostListener('mouseenter') onMouseOver() {
    // // Forma verbosa:
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // )
    this.backgroundColor = 'yellow';
  };

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
  };

}
