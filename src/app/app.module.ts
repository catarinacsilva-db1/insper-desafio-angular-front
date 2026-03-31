import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroPesquisaComponent } from './components/index/filtro-pesquisa/filtro-pesquisa.component';
import { IndexComponent } from './components/index/index.component';
import { ModalConfirmacaoUsuarioComponent } from './components/index/modal-confirmacao-usuario/modal-confirmacao-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FiltroPesquisaComponent,
    ModalConfirmacaoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
