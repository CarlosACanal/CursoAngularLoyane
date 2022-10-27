import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  
  linkAliens!: string

  cursos!: string[]

  constructor(cursosService: CursosService) {
    this.linkAliens='carlos';
    this.cursos = cursosService.getCursos()
   }

  ngOnInit(): void {
  }

}
