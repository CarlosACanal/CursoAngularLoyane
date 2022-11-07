import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
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
}
