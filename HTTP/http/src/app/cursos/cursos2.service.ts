import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { Curso } from './cursos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Curso> {

  constructor(private httpClient: HttpClient) {
    // Sempre que temos herança precisamos fazer a chamada super;
    super(httpClient, `${environment.baseURL}/cursos`);
  }
}
