import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(
    private http: HttpClient
  ) { }

  verificaEmail(email: string) {
    return this.http.get('assets/verificarEmail.json').pipe(
      map((dados:any) => dados.emails),
      tap(console.log),
      map((dados: {email: string}[]) => dados.filter( e =>  e.email === email )),
      tap(console.log),
      map((dados: any[]) => dados.length > 0),
      tap(console.log),
    )
    // Com esse pipe inicial, conseguimos usar qualquer outro operaedor para aplicarmos uma lógica;

  }
}
