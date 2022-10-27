import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data',
  templateUrl: './two-way-data.component.html',
  styleUrls: ['./two-way-data.component.scss']
})
export class TwoWayDataComponent implements OnInit {
  nome:string= 'Nenhum nome Informado';

  pessoa:any = {
    nome: 'Carlos',
    idade: 22,
  }
  
  nomeDoCurso:string = 'Angular'
  btnText:string = 'oi'

  constructor() { }

  ngOnInit(): void {
  }

  onMudouValor(evento:any){
    console.log(evento.novoValor)
  }

}
