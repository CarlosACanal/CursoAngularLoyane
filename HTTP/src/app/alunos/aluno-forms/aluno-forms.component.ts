import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-forms',
  templateUrl: './aluno-forms.component.html',
  styleUrls: ['./aluno-forms.component.scss']
})
export class AlunoFormsComponent implements OnInit, OnDestroy {

  aluno:any;
  inscricao!: Subscription

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService,
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
        let id = params['id'];
        this.aluno = this.alunoService.getAlunoById(id)
      });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
