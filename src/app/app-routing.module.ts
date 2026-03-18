import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ModalStatusUsuarioComponent } from './components/index/modal-status-usuario/modal-status-usuario.component';

const routes: Routes = [
{path: 'index', component: IndexComponent,
  children: [
    {path: 'status/:id', component: ModalStatusUsuarioComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
