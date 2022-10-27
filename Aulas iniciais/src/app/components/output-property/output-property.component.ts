import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {
  
  @Input() valor:number = 0;

  @Output() mudouValor = new EventEmitter();
  // Estmos enviando de um filho para o pai

  @ViewChild ('campoInput') campoValorInput!: ElementRef

  constructor() { }

  ngOnInit(): void { }


  maisUm(){
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({novoValor: this.campoValorInput})
  }
  menosUm(){
    this.campoValorInput.nativeElement.value--
    this.mudouValor.emit({novoValor: this.campoValorInput})
  }

}
