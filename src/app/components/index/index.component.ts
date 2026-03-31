import { Component, OnInit, ViewChild } from '@angular/core';
import { IConteudoModal, MODAL_CONFIG } from 'src/app/service/constantes/conteudoModal';
import { IUsuario } from 'src/app/service/interfaces/IUsuario';
import { IUsuarioModal } from 'src/app/service/interfaces/IUsuarioModal';
import { UsuarioService } from './../../service/usuario.service';
import { ModalConfirmacaoUsuarioComponent } from './modal-confirmacao-usuario/modal-confirmacao-usuario.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
     @ViewChild('modalStatus') modalStatus!: ModalConfirmacaoUsuarioComponent;
     @ViewChild('modalExcluir') modalExcluir!: ModalConfirmacaoUsuarioComponent;

    conteudoModal!: IConteudoModal;
    usuariosList: IUsuario[] = [];
    usuarioModal!: IUsuarioModal;

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
    this.conteudoModal = MODAL_CONFIG.STATUS(this.usuarioModal.Nome, this.usuarioModal.Sobrenome, this.usuarioModal.Ativo);
    setTimeout(() => this.modalStatus.abrir(), 0);
  }

  abreModalExcluir(usuario: IUsuario){
    this.atribuiUsuarioModal(usuario);
    this.conteudoModal = MODAL_CONFIG.EXCLUIR(this.usuarioModal.Nome, this.usuarioModal.Sobrenome);
    setTimeout(() => this.modalExcluir.abrir(), 0);
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
