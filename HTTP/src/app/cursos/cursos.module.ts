import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';

import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from '../cursos/curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,

  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  providers: [CursosService],
})
export class CursosModule { }
