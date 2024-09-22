import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveSearchRoutingModule } from './reactive-search-routing.module';
import { ReactiveSearchComponent } from './reactive-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveSearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReactiveSearchModule { }
