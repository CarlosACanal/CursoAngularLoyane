import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "a casa caida",
    rating: "2.1312",
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: "https://www.phooto.com.br/wp-content/uploads/2018/11/Capa-dura-produto-21x28-semselo.png"
  };

  livros: string[] = ["Java", "Angular"]

  filtro?:string

  constructor() { }

  ngOnInit(): void {
  }

  // obterCursos(){
  //   if (this.livros.length === 0 || this.filtro === undefined || this.filtro?.trim() === ''){
  //     return this.livros
  //   }
  // }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('valor assincrono'), 2000)
  } );

  valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => {
      observable.next('Valor assíncrono 2');
    }, 2000);
  });

}
