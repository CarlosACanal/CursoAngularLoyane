import { Injectable } from '@angular/core';

@Injectable({
  // esse decorator faz com que a classe daqui possa ser injetada em outra classe para podermos fazer o uso;
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Marciano', 'Unespiano', 'Lunatico'];
  }
}
