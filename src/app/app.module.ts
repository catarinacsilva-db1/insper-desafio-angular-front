import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { IndexComponent } from './components/index/index.component';
import { FiltroBarraPesquisaComponent } from './components/shared/filtro-barra-pesquisa/filtro-barra-pesquisa.component';
import { InputCpfComponent } from './components/shared/formulario/input-cpf/input-cpf.component';
import { InputDataComponent } from './components/shared/formulario/input-data/input-data.component';
import { InputSenhaComponent } from './components/shared/formulario/input-senha/input-senha.component';
import { InputTextoComponent } from './components/shared/formulario/input-texto/input-texto.component';
import { ModalConfirmacaoUsuarioComponent } from './components/tabela-usuario/modal-confirmacao-usuario/modal-confirmacao-usuario.component';
import { TabelaUsuarioComponent } from './components/tabela-usuario/tabela-usuario.component';
import { BotaoTraducaoComponent } from './components/shared/botao-traducao/botao-traducao.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
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
    FiltroBarraPesquisaComponent,
    BotaoTraducaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
