import { IUsuario } from 'src/app/service/interfaces/IUsuario';
import { UsuarioService } from './../../service/usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalConfirmacaoUsuarioComponent } from './modal-confirmacao-usuario/modal-confirmacao-usuario.component';
import { IUsuarioModal } from 'src/app/service/interfaces/IUsuarioModal';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
     @ViewChild('modalStatus') modalStatus!: ModalConfirmacaoUsuarioComponent;
     @ViewChild('modalExcluir') modalExcluir!: ModalConfirmacaoUsuarioComponent;

    usuariosList: IUsuario[] = [];
    usuarioModal: IUsuarioModal = {
      Id: 0,
      Ativo: false,
      Nome: '',
      Sobrenome: ''
    };

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


  buscaTituloBotaoStatus(status: boolean): string {
    return status ? 'Inativar Usuário' : 'Ativar Usuário';
  }

  abreModalStatus(usuario: IUsuario){
    this.atribuiUsuarioModal(usuario);
    this.modalStatus.abrir();
  }

  abreModalExcluir(usuario: IUsuario){
    this.atribuiUsuarioModal(usuario);
    this.modalExcluir.abrir();
  }

  atualizarStatusUsuario(){
    if (this.usuarioModal.Id) {
        this.usuarioService.atualizaStatusUsuario(this.usuarioModal.Id).subscribe(() => {
        this.listarUsuarios();
         });
    }
    this.modalStatus.fechar();
  }

    excluirUsuario(){
    if (this.usuarioModal.Id) {
        this.usuarioService.deletarUsuario(this.usuarioModal.Id).subscribe(() => {
        this.listarUsuarios();
         });
    }
    this.modalExcluir.fechar();
  }

  private atribuiUsuarioModal(usuario: IUsuario) {
      this.usuarioModal = {
      Id: usuario.Id,
      Ativo: usuario.Ativo,
      Nome: usuario.Nome,
      Sobrenome: usuario.Sobrenome
    };
  }
}
