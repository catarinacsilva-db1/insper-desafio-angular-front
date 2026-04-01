export interface IUsuario {
  Id?: number;
  Ativo: boolean;
  Nome: string;
  Sobrenome: string;
  NomeSocial?: string | null;
  DataNascimento: string;
  Cpf: string;
  Senha: string;
}
