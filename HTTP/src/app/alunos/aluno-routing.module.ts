import { AlunoFormsComponent } from './aluno-forms/aluno-forms.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'alunos', component: AlunosComponent, children: [
            { path: 'novo', component: AlunoFormsComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/edit', component: AlunoFormsComponent },
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
