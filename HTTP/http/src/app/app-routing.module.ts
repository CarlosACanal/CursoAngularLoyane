import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'reactive'},
  {path: 'cursos',   loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
  {path: 'poc',   loadChildren: () => import('./unsubscribe-rxjs/unsubscribe-rxjs.module').then(m => m.UnsubscribeRxjsModule)},
  {path: 'upload',   loadChildren: () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule)},
  {path: 'reactive',   loadChildren: () => import('./reactive-search/reactive-search.module').then(m => m.ReactiveSearchModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
