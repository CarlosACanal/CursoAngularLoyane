import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursoComponent } from './curso/curso.component';
import { CursoResolverGuard } from './guards/curso-resolver.guard';

const routes: Routes = [
  {path : '', component: CursosListaComponent},
  // Aqui passamos o resolverGuard que vai executar a lógica dentro dele assim que a rota for ativada;
  {path: 'novo', component: CursoComponent, resolve: {curso: CursoResolverGuard}},
  {path: 'editar/:id', component: CursoComponent, resolve: {curso: CursoResolverGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
