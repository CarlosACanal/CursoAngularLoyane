import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursoService } from './components/cursos/cursos.service';
import { CriarCursoModule } from './components/criar-curso/criar-curso.module';
import { CursosModule } from './components/cursos/cursos.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [
    // CursoService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
