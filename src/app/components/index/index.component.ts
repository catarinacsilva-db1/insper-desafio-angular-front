import { IUsuario } from 'src/app/service/interfaces/IUsuario';
import { UsuarioService } from './../../service/usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalStatusUsuarioComponent } from './modal-status-usuario/modal-status-usuario.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
   @ViewChild(ModalStatusUsuarioComponent) modalStatus!: ModalStatusUsuarioComponent;

  usuariosList: IUsuario[] = [];

  constructor(
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

listarUsuarios(){
      this.usuarioService.getListaUsuarios().subscribe((usuarios) => {
      this.usuariosList = usuarios;
    });
}

openModalStatus(usuario: IUsuario){
   this.modalStatus.usuario = {
    Id: usuario.Id,
    Ativo: usuario.Ativo,
    Nome: usuario.Nome,
    Sobrenome: usuario.Sobrenome
  };
  this.modalStatus.abrir();
}


getTitle(status: boolean): string {
  return status ? 'Inativar Usuário' : 'Ativar Usuário';
}
}
