import { AlunoDetalheResolver } from './guards/aluno-detalhe-resolver.guard';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunoFormsComponent } from './aluno-forms/aluno-forms.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosGuard } from '../guards/alunos.guard';

const routes: Routes = [
    {
        path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children: [
            { path: 'novo', component: AlunoFormsComponent },
            {
                path: ':id', component: AlunoDetalheComponent,
                resolve: { aluno: AlunoDetalheResolver }
            },
            {
                path: ':id/edit',
                component: AlunoFormsComponent,
                canDeactivate: [AlunosDeactivateGuard]
            },
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
