export interface IConteudoModal {
  titulo: string;
  corpo: string;
  textoBotaoConfirmar: string;
}

export const MODAL_CONFIG = {
  STATUS: (nome: string, sobrenome: string, ativo: boolean): IConteudoModal => ({
    titulo: 'Alteração de Status',
    corpo: `Deseja alterar o status do usuário ${nome} ${sobrenome} para ${ativo ? 'Inativo' : 'Ativo'}?`,
    textoBotaoConfirmar: 'Alterar'
  }),
  EXCLUIR: (nome: string, sobrenome: string): IConteudoModal => ({
    titulo: 'Confirmação de Exclusão',
    corpo: `Deseja excluir o usuário ${nome} ${sobrenome}?`,
    textoBotaoConfirmar: 'Excluir'
  })
};
