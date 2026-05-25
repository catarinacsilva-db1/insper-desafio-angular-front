import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-senha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.css']
})
export class InputSenhaComponent implements OnInit {

  @Input()
  validaCampo: boolean = false;

  @Input()
  formPai!: FormGroup;

  @Input()
  campo ={
    labelForCampoSenha: '',
    tituloCampoSenha: '',
    formControlNameCampoSenha: '',
    idCampoSenha: ''
  };

  constructor() { }

  ngOnInit(): void {

  }

  validaConfirmaSenha(){
    const campoConfirmarSenha = this.formPai.get(this.campo.formControlNameCampoSenha + 'Confirmar');
    if (campoConfirmarSenha && campoConfirmarSenha.touched) {
      const erroSenha = this.formPai.hasError('senhasDiferentes')
      return erroSenha;
    }
    return false;
  }

  campoSenhaErros(erro: string): boolean | null {
    const campoSenha = this.formPai.get(this.campo.formControlNameCampoSenha);
    if (!campoSenha?.dirty) return null;
    return !!campoSenha?.errors?.[erro];
    }
}
