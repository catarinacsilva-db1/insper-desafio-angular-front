import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {
  @Input() totalItems: number = 0;
  @Input() itensPorPagina: number = 5;
  @Input() paginaAtual: number = 1;
  @Input() totalPaginas: number = 1;
  @Output() mudaPagina = new EventEmitter<{ pagina: number, itensPorPagina: number }>();


  constructor() { }

  ngOnInit(): void {
  }

  get arrayPaginas(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  alterarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaAtual = pagina;
      this.mudaPagina.emit({ pagina: this.paginaAtual, itensPorPagina: this.itensPorPagina });
    }
    console.log("totalItems: " + this.totalItems, " itensPorPagina: " + this.itensPorPagina, " paginaAtual: " + this.paginaAtual, " totalPaginas: " + this.totalPaginas);
}}
