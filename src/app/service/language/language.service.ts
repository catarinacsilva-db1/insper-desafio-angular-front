import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {


  constructor(
    private readonly translate: TranslateService) {
    this.translate.setDefaultLang('pt-BR');
  }

  setIdioma(language: string) {
    this.translate.use(language);
  }
}
