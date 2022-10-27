import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { CursosModule } from './cursos/cursos.module';
import { DatabidingComponent } from './components/databiding/databiding.component';
import { TwoWayDataComponent } from './components/two-way-data-biding/two-way-data/two-way-data.component';
import { InputPropertyComponent } from './components/input-property/input-property.component';
import { ButtonComponent } from './components/button/button.component';
import { OutputPropertyComponent } from './components/output-property/output-property.component';
import { CicloComponent } from './components/ciclo/ciclo.component';

@NgModule({
  // colocamos todos os componentes, diretivas e pipes;
  declarations: [
    AppComponent,
    ButtonComponent,
    PrimeiroComponenteComponent,
    DatabidingComponent,
    TwoWayDataComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
  ],
  imports: 
  // colocamos apenas módulos
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CursosModule,
    FormsModule,
  ],
  providers:
  // Serviços que ficarão serviçoes para esse módulo;
  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
