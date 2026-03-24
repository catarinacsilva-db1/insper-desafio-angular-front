import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ModalConfirmacaoUsuarioComponent } from './components/index/modal-confirmacao-usuario/modal-confirmacao-usuario.component';

const routes: Routes = [
{path: 'index', component: IndexComponent,
  children: [
    {path: 'status/:id', component: ModalConfirmacaoUsuarioComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
