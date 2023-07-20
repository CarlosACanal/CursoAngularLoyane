import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../cursos';
import { CursosService } from '../cursos.service';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {
  constructor(
    private cursosService: CursosService,
  ) {}

  // Esse guard serve para que algo inicial seja executado assim que a rota for ativada, precisamos passar esse guard la no routing como resolve;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> | Promise<Curso> {
    if (route.params && route.params['id']) {
      return this.cursosService.getById(route.params['id']);
    }
    return {nome:null, id:null}
  }
  
}
