import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../cursos';
import { EMPTY, Observer, catchError } from 'rxjs';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {
  cursos$!: Curso[];
  error$!: Observer<boolean>;
  bsModalRef!: BsModalRef;
  constructor(
    private cursoService: CursosService,
    private modalService: BsModalService,
  ) { }

  handleError() {
    console.log('oi')
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar os cursos.';
  }

  getCursos() {
    // Como a propriedade cursos$ é um observable, posso fazer da seguinte maneira:
    this.cursoService.list().subscribe({
      next: (v) => {
        this.cursos$ = v;
      },
      error: (e) => {
        catchError(error => {
          // this.error$.next(true);
          this.handleError();
          return EMPTY
        })
      },
      complete: () => console.log("completo")
    })
  }


  excluir(id: any) {
    this.cursoService.remove(id).subscribe({
      next: () => this.getCursos(),
      error: () => (window.alert("Erro ao excluir"))
    })
  }

  ngOnInit() {
    this.getCursos();
  }
}
