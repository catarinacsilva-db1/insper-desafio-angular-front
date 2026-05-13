import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from './interfaces/IUsuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.apiUrl}/Usuarios`;

  constructor(private http: HttpClient) { }

  obterListaUsuarios() {
    return this.http.get<IUsuario[]>(this.API);
  }

  obterUsuarioPorId(id: number) {
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

