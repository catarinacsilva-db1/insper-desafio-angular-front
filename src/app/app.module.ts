import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { InputCpfComponent } from './components/formulario-usuario/input-cpf/input-cpf.component';
import { InputDataComponent } from './components/formulario-usuario/input-data/input-data.component';
import { InputSenhaComponent } from './components/formulario-usuario/input-senha/input-senha.component';
import { InputTextoComponent } from './components/formulario-usuario/input-texto/input-texto.component';
import { IndexComponent } from './components/index/index.component';
import { ModalConfirmacaoUsuarioComponent } from './components/tabela-usuario/modal-confirmacao-usuario/modal-confirmacao-usuario.component';
import { TabelaUsuarioComponent } from './components/tabela-usuario/tabela-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaUsuarioComponent,
    ModalConfirmacaoUsuarioComponent,
    FormularioUsuarioComponent,
    IndexComponent,
    InputTextoComponent,
    InputDataComponent,
    InputCpfComponent,
    InputSenhaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
