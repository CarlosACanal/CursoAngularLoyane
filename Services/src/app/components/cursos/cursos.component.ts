import { Component, OnInit } from '@angular/core';

import { CursoService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursoService],
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursoService: CursoService) {
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();

    CursoService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}