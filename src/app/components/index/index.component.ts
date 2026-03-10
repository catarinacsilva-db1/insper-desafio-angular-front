import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    usuarios = [
      {
        ativo: true,
        nome: 'Teste',
        sobrenome: 'Da Silva',
        nomeSocial: '',
        dataNascimento: new Date(),
        cpf: '123.456.789-00'
      },
      {
        ativo: true,
        nome: 'João',
        sobrenome: 'Santos',
        nomeSocial: '',
        dataNascimento: new Date(),
        cpf: '987.654.321-11'
      },
      {
        ativo: false,
        nome: 'Maria',
        sobrenome: 'Oliveira',
        nomeSocial: '',
        dataNascimento: new Date(),
        cpf: '456.789.123-22'
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  editar(){}
  excluir(){}
  alteraStatus(usuario: any){
    usuario.ativo = !usuario.ativo;
  }
  
//implementar chamado ao componente modal
  toggleModalConfirmaExcluir(usuario: any){
  }
  toggleModalConfirmaStatus(usuario: any){
  }
}
