import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-cpf',
  templateUrl: './input-cpf.component.html',
  styleUrls: ['./input-cpf.component.css']
})
export class InputCpfComponent implements OnInit {

  @Input()
  validaCampo: boolean = false;
  @Input()
  validaEdicao: boolean = false;

  @Input()
  formPai!: FormGroup;

  @Input()
  campo ={
    labelForCampo: '',
    tituloCampo: '',
    formControlNameCampo: '',
    idCampo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
