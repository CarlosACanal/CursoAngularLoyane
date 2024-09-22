import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './cursos';
import { environment } from 'src/environments/environment';
import { delay, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(`${environment.baseURL}/cursos`).pipe(
      delay(1000)
    );
  }

  getById(id:any) {
    return this.http.get<Curso>(`${environment.baseURL}/cursos/${id}`).pipe(take(1));
  }

  create(curso: Curso) {
    return this.http.post(`${environment.baseURL}/cursos`, curso).pipe(take(1));
  }

  update(curso:Curso) {
    return this.http.put(`${environment.baseURL}/cursos/${curso.id}`, curso).pipe(take(1));
  }

  remove(id:any) {
    return this.http.delete(`${environment.baseURL}/cursos/${id}`).pipe(take(1));
  }
}
