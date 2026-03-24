import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UsuarioService } from '../../../service/usuario.service';
import { IUsuarioModal } from 'src/app/service/interfaces/IUsuarioModal';
import Modal from 'bootstrap/js/dist/modal';


@Component({
  selector: 'app-modal-confirmacao-usuario',
  templateUrl: './modal-confirmacao-usuario.component.html',
  styleUrls: ['./modal-confirmacao-usuario.component.css']
})

export class ModalConfirmacaoUsuarioComponent implements OnInit {
    @ViewChild('modalConfirmacao') modalConfirmacao!: ElementRef;
    private modal!: Modal;

  @Output() confirmar = new EventEmitter<void>();

  //criar interface para receber dados de modal
  @Input() titulo: string = '';
  @Input() corpo: string = '';
  @Input() textoBotaoConfirmar: string = 'Confirmar';

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
    this.modal = new Modal(this.modalConfirmacao.nativeElement);
   }//entender ciclos de vida angular


  abrir(){
    this.modal.show();
  }

  fechar(){
    this.modal.hide();
  }

  executar(){
    this.confirmar.emit();
  }
}
