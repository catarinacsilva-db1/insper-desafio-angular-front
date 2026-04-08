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

@NgModule({
  declarations: [
    AppComponent,
    TabelaUsuarioComponent,
    ModalConfirmacaoUsuarioComponent,
    FormularioUsuarioComponent,
    IndexComponent
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
