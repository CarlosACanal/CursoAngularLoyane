import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databiding',
  templateUrl: './databiding.component.html',
  styleUrls: ['./databiding.component.scss']
})
export class DatabidingComponent implements OnInit {

  url:string = 'http://google.com';
  urlImagem:string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
  textoAtual!:string;
  valorSalvo!:string;
  mousePosition:boolean = false;

  constructor() { }

  ngOnInit(): void { }

  getValor(){
    return 1;
  }

  botaoClicado(){
    return alert('oi');
  }

  onKeyUp(evento: KeyboardEvent){
    this.textoAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.mousePosition = !this.mousePosition;

  }
}
