import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UsuarioService } from '../../../service/usuario.service';
import { IUsuarioModal } from 'src/app/service/interfaces/IUsuarioModal';
import Modal from 'bootstrap/js/dist/modal';


@Component({
  selector: 'app-modal-status-usuario',
  templateUrl: './modal-status-usuario.component.html',
  styleUrls: ['./modal-status-usuario.component.css']
})

export class ModalStatusUsuarioComponent implements OnInit {
    @ViewChild('modalStatus') modalStatus!: ElementRef;
    private modal!: Modal;

  @Output() statusAtualizado = new EventEmitter<void>();
  @Input() usuario: IUsuarioModal = {
    Id: 0,
    Ativo: false,
    Nome: '',
    Sobrenome: ''
  };

  constructor(
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

   ngAfterViewInit(): void {
    this.modal = new Modal(this.modalStatus.nativeElement);
   }//entender ciclos de vida angular

  atualizarStatusUsuario(id: number){
    if (this.usuario.Id) {
        this.usuarioService.atualizaStatusUsuario(id).subscribe(() => {
          this.usuario.Ativo = !this.usuario.Ativo;
          this.statusAtualizado.emit();
        });
    }
    this.fechar();
  }

  abrir(){

    this.modal.show();
  }

  fechar(){

    this.modal.hide();
  }
}
