import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-botao-traducao',
  templateUrl: './botao-traducao.component.html',
  styleUrls: ['./botao-traducao.component.css']
})
export class BotaoTraducaoComponent implements OnInit {

  constructor(
    private readonly languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  mudarIdioma(language: string) {
    this.languageService.setIdioma(language);
  }

}
