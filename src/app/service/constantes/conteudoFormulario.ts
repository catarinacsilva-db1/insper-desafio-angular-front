export interface IConteudoForm {
  titulo: string;
  textoBotaoConfirmar: string;
}

export const FORM_CONFIG = {
  EDITAR: (): IConteudoForm => ({
    titulo: 'Editar Usuário',
    textoBotaoConfirmar: 'Editar'
  }),
  CADASTRAR: (): IConteudoForm => ({
    titulo: 'Cadastro de Usuário',
    textoBotaoConfirmar: 'Cadastrar'
  })
};
