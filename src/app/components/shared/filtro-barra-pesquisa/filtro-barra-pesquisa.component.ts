import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-filtro-barra-pesquisa',
  templateUrl: './filtro-barra-pesquisa.component.html',
  styleUrls: ['./filtro-barra-pesquisa.component.css']
})
export class FiltroBarraPesquisaComponent implements OnInit {

  @Output() buscar = new EventEmitter<{ filtro: string, termoPesquisa: string }>();
  @Output() limparBusca = new EventEmitter<void>();

  Options= [
    { value: 'todos', label: 'FILTRO_PESQUISA.OPCOES_STATUS.TODOS' },
    { value: 'ativo', label: 'FILTRO_PESQUISA.OPCOES_STATUS.ATIVO' },
    { value: 'inativo', label: 'FILTRO_PESQUISA.OPCOES_STATUS.INATIVO' }
  ];

  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      filtro: ['todos'],
      termoPesquisa: ['']
    });
  }

  onBuscar() {
    const filtro = this.form.get('filtro')?.value;
    const termoPesquisa = this.form.get('termoPesquisa')?.value;
    this.buscar.emit({ filtro, termoPesquisa });
    console.log("evento emitido: " + filtro + " && " + termoPesquisa);
  }

  limpar() {
    this.form.reset({ filtro: 'todos', termoPesquisa: '' });
    this.limparBusca.emit();
  }
}
