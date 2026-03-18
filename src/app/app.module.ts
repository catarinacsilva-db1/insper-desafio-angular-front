import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { FiltroPesquisaComponent } from './components/index/filtro-pesquisa/filtro-pesquisa.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalStatusUsuarioComponent } from './components/index/modal-status-usuario/modal-status-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FiltroPesquisaComponent,
    ModalStatusUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
