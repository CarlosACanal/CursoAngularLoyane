import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.scss']
})
export class ReactiveSearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$!: Observable<any>;
  total!: number;
  fields = 'name,description,version,homepage';

  constructor(
    private http: HttpClient
  ) { }

  // onSearch() {
  //   const fields = 'name,description,version,homepage';
  //   let value = this.queryField.value;
  //   if (value && (value = value.trim()) != '') {

  //     const params = {
  //       search: value,
  //       fields: fields
  //     }

  //     this.results$ = this.http.get(this.SEARCH_URL, { params }).pipe(
  //       tap((res: any) => this.total = res.total),
  //       map((res: any) => res.results)
  //     )

  //   }
  // }

  ngOnInit(): void {
    // O valueChanges retorna um observable do formControl
    this.results$ = this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length > 2),
      debounceTime(300),
      // esse é um delay que botamos para q a busca nao seja feita a cada nova letra, mas sim se o user ficar 300ms sem digitar
      distinctUntilChanged(),
      // faz com q msm q a pessoa coloque mais espaços, se a pesquisa for a mesma nao vai fzr nova requisição
      switchMap(value => this.http.get(this.SEARCH_URL, { params : {search: value, fields: this.fields}})),
      // O switchMap eu basicamente estou fazendo a requisiçao do que eu quero, é uma maneira melhor de ter um observable dentro de um observable
      tap((resp:any) => this.total = resp.total),
      map((res:any) => res.results)
    )
  }

}
