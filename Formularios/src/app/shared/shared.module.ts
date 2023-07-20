import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    InputComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    CampoControlErroComponent,
  ]
})
export class SharedModule { }
