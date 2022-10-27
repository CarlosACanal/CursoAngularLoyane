import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursoService } from './cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  providers: [CursoService]
})
export class CursosModule { }
