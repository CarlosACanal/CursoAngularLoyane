import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'example1@example.com.br'},
    {id: 2, nome: 'Aluno 02', email: 'example2@example.com.br'},
    {id: 3, nome: 'Aluno 03', email: 'example3@example.com.br'},
    {id: 4, nome: 'Aluno 04', email: 'example4@example.com.br'},
    {id: 5, nome: 'Aluno 05', email: 'example5@example.com.br'}
  ]

  constructor() { }

  getAlunos() {
    return this.alunos;
  }
  
  getAlunoById(id: number) {
    let alunos = this.getAlunos();
    for (let i = 0; i < alunos.length; i++) {
      let aluno = alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
}
