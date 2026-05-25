export interface IConteudoModal {
  titulo: string;
  corpo: string;
  textoBotaoConfirmar: string;
  params?: any;
}

export const MODAL_CONFIG = {
  STATUS: (nome: string, sobrenome: string, statusTexto: string): IConteudoModal => ({
    titulo: 'MODAL.ALTERACAO_STATUS.TITULO',
    corpo: 'MODAL.ALTERACAO_STATUS.CORPO',
    textoBotaoConfirmar: 'BOTAO.ALTERAR',
    params: { nome, sobrenome, statusTexto }
  }),
  EXCLUIR: (nome: string, sobrenome: string): IConteudoModal => ({
    titulo: 'MODAL.EXCLUIR.TITULO',
    corpo: 'MODAL.EXCLUIR.CORPO',
    textoBotaoConfirmar: 'BOTAO.EXCLUIR',
    params: { nome, sobrenome }
  })
};
