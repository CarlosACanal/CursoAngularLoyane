import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Hightlight]'
})
export class HightlightDirective {

  constructor() { }

  @Input() defaultColor:string = "transparent";
  @Input() highlightColor:string = "yellow";

  
  @HostBinding('style.backgroundColor') backgroundColor?: string;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  };

  ngOnInit(){
    this.backgroundColor = this.defaultColor
  }

}
