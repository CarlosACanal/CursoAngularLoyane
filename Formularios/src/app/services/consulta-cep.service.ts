import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  getDataByCep(cep: any) : Observable<any> {
    return this.http.get(`http://viacep.com.br/ws/${cep}/json`)
  }
}
