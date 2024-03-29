import { AlunosService } from './../alunos.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno';
@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: any;
  inscricao!: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService,
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(
    //   (params:any) => {
    //     let id = params['id'];
    //     this.aluno = this.alunoService.getAlunoById(id)
    //   });

    this.inscricao = this.route.data.subscribe(
      (data) => {
        console.log(data);
        this.aluno = data['aluno'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'edit']);
  }
}
