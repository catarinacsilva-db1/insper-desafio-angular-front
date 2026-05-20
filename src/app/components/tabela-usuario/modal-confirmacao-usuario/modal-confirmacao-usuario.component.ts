import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import Modal from 'bootstrap/js/dist/modal';
import { IConteudoModal } from 'src/app/service/constantes/conteudoModal';
import { UsuarioService } from '../../../service/usuario/usuario.service';


@Component({
  selector: 'app-modal-confirmacao-usuario',
  templateUrl: './modal-confirmacao-usuario.component.html',
  styleUrls: ['./modal-confirmacao-usuario.component.css']
})

export class ModalConfirmacaoUsuarioComponent implements OnInit, AfterViewInit {
  @ViewChild('modalConfirmacao') modalConfirmacao!: ElementRef;
  private modal!: Modal;

  @Output() confirmar = new EventEmitter<void>();

  @Input() conteudo!: IConteudoModal;

  constructor(
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.modal = new Modal(this.modalConfirmacao.nativeElement);
  }


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
