export interface IUsuario {
  id?: number;
  ativo: boolean;
  nome: string;
  sobrenome: string;
  nomeSocial?: string | null;
  dataNascimento: string;
  cpf: string;
  senha: string;
}
