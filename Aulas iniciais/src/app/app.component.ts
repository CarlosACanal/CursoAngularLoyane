import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  valor:any = 5;
  deletarCiclo:boolean = false;


  mudarValor(){
    this.deletarCiclo = false
    this.valor = (Math.random()*100)
  }

  deletaValor(){
    this.deletarCiclo = true;
  }

}
