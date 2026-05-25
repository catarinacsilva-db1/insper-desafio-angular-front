import { Component, OnInit, ViewChild } from '@angular/core';
import { IConteudoModal, MODAL_CONFIG } from 'src/app/service/constantes/conteudoModal';
import { TranslateService } from '@ngx-translate/core';
import { IUsuario } from 'src/app/service/interfaces/IUsuario';
import { IUsuarioModal } from 'src/app/service/interfaces/IUsuarioModal';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { ModalConfirmacaoUsuarioComponent } from './modal-confirmacao-usuario/modal-confirmacao-usuario.component';


@Component({
  selector: 'app-tabela-usuario',
  templateUrl: './tabela-usuario.component.html',
  styleUrls: ['./tabela-usuario.component.css']
})

export class TabelaUsuarioComponent implements OnInit {
     @ViewChild('modalStatus') modalStatus!: ModalConfirmacaoUsuarioComponent;
     @ViewChild('modalExcluir') modalExcluir!: ModalConfirmacaoUsuarioComponent;

    conteudoModal!: IConteudoModal;
    usuariosList: IUsuario[] = [];
    usuarioModal!: IUsuarioModal;

    filtro: string = 'todos';
    termoPesquisa: string = '';

    paginaAtual: number = 1;
    itensPorPagina: number = 5;
    totalUsuarios: number = 0;
    totalPaginas: number = 1;


    constructor(
      private usuarioService: UsuarioService,
      private translate: TranslateService) { }

    ngOnInit(): void {
      this.listarUsuarios();
    }

  listarUsuarios(){
        this.usuarioService.obterListaUsuarios(this.filtro, this.termoPesquisa, this.paginaAtual, this.itensPorPagina).subscribe((response) => {
        this.usuariosList = response.body || [];

        const paginationHeader = response.headers.get('X-Pagination');

        if (paginationHeader) {
          var paginacao = JSON.parse(paginationHeader);
          this.totalUsuarios = paginacao.totalItems;
          // this.itensPorPagina = paginacao.itemsPerPage;
          this.paginaAtual = paginacao.currentPage;
          this.totalPaginas = paginacao.totalPages;
          console.log('Dados da paginação:', paginacao);
        }
      });
  }

  buscaTituloBotaoStatus(status: boolean): string {
    return status ? 'TABELA.ACAO_USUARIO.INATIVAR' : 'TABELA.ACAO_USUARIO.ATIVAR';
  }

  abreModalStatus(usuario: IUsuario){
    this.atribuiUsuarioModal(usuario);
    const statusTexto = this.translate.instant(this.usuarioModal.Ativo ? 'STATUS.INATIVO' : 'STATUS.ATIVO');
    this.conteudoModal = MODAL_CONFIG.STATUS(this.usuarioModal.Nome, this.usuarioModal.Sobrenome, statusTexto);
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

  pesquisarUsuarios($event: { filtro: string, termoPesquisa: string }){
    this.filtro = $event.filtro;
    this.termoPesquisa = $event.termoPesquisa;
    this.paginaAtual = 1;
    this.listarUsuarios();
  }

  onMudaPagina($event: { pagina: number, itensPorPagina: number }) {
    this.paginaAtual = $event.pagina;
    this.itensPorPagina = $event.itensPorPagina;
    this.listarUsuarios();
  }

  private atribuiUsuarioModal(usuario: IUsuario) {
      this.usuarioModal = {
      Id: usuario.id,
      Ativo: usuario.ativo,
      Nome: usuario.nome,
      Sobrenome: usuario.sobrenome
    };
  }
}
