import { IUsuario, UsuarioService } from './../../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  usuariosList: IUsuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

listarUsuarios(){
      this.usuarioService.getListaUsuarios().subscribe((usuarios) => {
      this.usuariosList = usuarios;
    });
}


//implementar chamado ao componente modal
  toggleModalConfirmaExcluir(usuario: any){
  }
  toggleModalConfirmaStatus(id: number){
    this.usuarioService.atualizaStatusUsuario(id).subscribe(() => {
      this.listarUsuarios();
    });
  }
}
