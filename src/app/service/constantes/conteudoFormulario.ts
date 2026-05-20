export interface IConteudoForm {
  titulo: string;
  textoBotaoConfirmar: string;
}

export const FORM_CONFIG = {
  EDITAR: (): IConteudoForm => ({
    titulo: 'FORMULARIO.TITULO_EDITAR',
    textoBotaoConfirmar: 'BOTAO.EDITAR'
  }),
  CADASTRAR: (): IConteudoForm => ({
    titulo: 'FORMULARIO.TITULO_CADASTRAR',
    textoBotaoConfirmar: 'BOTAO.CADASTRAR'
  })
};
