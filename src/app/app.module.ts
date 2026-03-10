import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { FiltroPesquisaComponent } from './components/index/filtro-pesquisa/filtro-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FiltroPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
