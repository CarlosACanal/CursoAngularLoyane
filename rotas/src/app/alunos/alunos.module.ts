import { AlunoDetalheResolver } from './guards/aluno-detalhe-resolver.guard';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './aluno-routing.module';
import { AlunosComponent } from './alunos.component';
import { AlunoFormsComponent } from './aluno-forms/aluno-forms.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
    declarations: [
        AlunosComponent,
        AlunoFormsComponent,
        AlunoDetalheComponent
    ],
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    providers: [
        AlunosService,
        AlunosDeactivateGuard,
        AlunoDetalheResolver
    ],
    bootstrap: []
})
export class AlunosModule { }
