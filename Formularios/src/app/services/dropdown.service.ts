import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Estado } from '../interfaces/Estado';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  readonly src = 'assets/estados.json';
  constructor(private http: HttpClient) {

   }

  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.src).pipe()
  }
}
