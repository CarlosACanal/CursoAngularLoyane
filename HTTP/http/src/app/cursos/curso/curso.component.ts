import { ActivatedRoute } from '@angular/router';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs';
import { Curso } from '../cursos';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  form!: FormGroup;
  submited: boolean = false;
  curso?: any;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
  ) { }

  salvarCurso() {
    this.submited = true;
    if (this.form.valid) {
      this.cursosService.create(this.form.value).subscribe({
        next: () => {
          window.alert('Enviado com sucesso!')
          this.form.reset();
        },
        error: (err) => {
          window.alert('erro ao enviar os dados. Tente novamente em alguns instantes!')
        },
        complete: () => console.log('finalizou')
      });
    }
  }

  cancelar() {
    this.submited = false;
    this.form.reset();
  }

  hasError(field: string) {
    if (this.submited) {
      return this.form.get(field)?.errors
    } else {
      return null
    }
  }

  buildForm(curso:Curso) {
    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    })
  }

  // buildForm() {
  //   this.form = this.fb.group({
  //     id: [null],
  //     nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
  //   })
  // }

  updateForm(curso: any) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    })
  }

  ngOnInit(): void {
    // Aqui nós estamos pegando o dado de curso que recebe o valor do resolver guard;
    const curso = this.activatedRoute.snapshot.data['curso'];
    // Aqui a gente já cria o Form com os dados, caso seja um novo curso estamos retornando o objeto com valores null lá e esse null será setado como valor inicial, então serve tanto para criação quanto para edição;
    this.buildForm(curso);

    // SEM RXJS:
    // this.activatedRoute.params.subscribe((params) => {
    //   this.cursosService.getById(params['id']).subscribe({
    //     next: (c) => { this.updateForm(c) },
    //     error: () => console.log('error'),
    //     complete: () => { console.log('pronto') },
    //   });
    // })

    // Simplificando com RXJS:
    // this.activatedRoute.params.pipe(
    //   // esse map já vai retornar o id
    //   map((params: any) => params['id']),
    //   // aqui no switchMap, a partir do id que o map retornou podemos puxar o curso
    //   switchMap(id => this.cursosService.getById(id))
    //   // Então o switchMap vai retornar o curso que recebemos da requisição e ao dar o .subscribe em todo esse pipe vamos receber o curso
    //   // Se fizesse parte da lógica eu ainda poderia fazer outro switchMap aqui, para pegar as aulas do curso, por exemplo;
    //   // switchMap(curso => método pega aulas do curso);
    // ).subscribe({
    //   next: (curso) => this.updateForm(curso),
    //   error: () => {
    //     // aviso na tela de erro
    //   }
    // })


  }
}
