import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
  // se eu quiser que funcione apenas em determinada tag, eu coloco o nome dele no começo do seletor. EX: 'p[fundoAmrelo]', assim só será aplicados em tags p.
})
export class FundoAmareloDirective {

  constructor(private elementref: ElementRef,
    private renderer: Renderer2) {
    // elementref.nativeElement.style.backgroundColor = 'yellow';

    // UTULIZAR O ELEMENT.REF NÃO É INDICADO POIS PODE CRIAR VULNERABILIDADE, O MAIS INDICADO É USAR O RANDERER.

    // Maneira correta e sem chance de vulnerabilidade (O renderer tem várias opções):

    renderer.setStyle(
      elementref.nativeElement,
      'background-color',
      'yellow')
  }

}
