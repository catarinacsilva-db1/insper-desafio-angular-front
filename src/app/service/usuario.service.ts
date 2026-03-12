import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IUsuario {
  Id: number;
  Ativo: boolean;
  Nome: string;
  Sobrenome: string;
  NomeSocial: string | null;
  DataNascimento: string;
  Cpf: string;
  Senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = "https://localhost:44380/Usuario"

  constructor(private http: HttpClient) { }

  getListaUsuarios() {
    return this.http.get<IUsuario[]>(this.API);
  }

  getUsuarioPorId(id: number) {
    return this.http.get<IUsuario>(`${this.API}/${id}`);
  }

  criarUsuario(usuario: IUsuario) {
    return this.http.post(this.API, usuario);
  }

  atualizarUsuario(id: number, usuario: IUsuario) {
    return this.http.put(`${this.API}/${id}`, usuario);
  }

  deletarUsuario(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  atualizaStatusUsuario(id: number) {
    return this.http.patch(`${this.API}/status/${id}`, null);
  }
}

