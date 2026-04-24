import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaUsuarioComponent } from './components/tabela-usuario/tabela-usuario.component';
import { ModalConfirmacaoUsuarioComponent } from './components/tabela-usuario/modal-confirmacao-usuario/modal-confirmacao-usuario.component';
import { Router, RouterModule } from '@angular/router';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { IndexComponent } from './components/index/index.component';
import { NgxMaskModule } from 'ngx-mask';
import { DatePipe } from '@angular/common';
import { InputTextoComponent } from './components/formulario-usuario/input-texto/input-texto.component';
import { InputDataComponent } from './components/formulario-usuario/input-data/input-data.component';
import { InputCpfComponent } from './components/formulario-usuario/input-cpf/input-cpf.component';
import { InputSenhaComponent } from './components/formulario-usuario/input-senha/input-senha.component';
import { RequisitoSenhaComponent } from './components/formulario-usuario/input-senha/requisito-senha/requisito-senha.component';

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
    RequisitoSenhaComponent
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
