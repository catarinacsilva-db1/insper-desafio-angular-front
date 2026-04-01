import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
{path: 'index', component: IndexComponent
},
{path: '', redirectTo: 'index', pathMatch: 'full'
},
{path: 'cadastrar', component: CadastroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
