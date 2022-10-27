import { Component, OnInit } from '@angular/core';

import { CursoService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursoService],
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];
  addCurso!: string;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

  onSubmit(inputCurso: any) {
    this.cursoService.addCurso(inputCurso);
  }

}
