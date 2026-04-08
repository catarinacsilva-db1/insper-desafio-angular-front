import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
{path: 'index', component: IndexComponent
},
{path: '', redirectTo: 'index', pathMatch: 'full'
},
{path: 'cadastrar', component: FormularioUsuarioComponent
},
{path: 'editar/:id', component: FormularioUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
