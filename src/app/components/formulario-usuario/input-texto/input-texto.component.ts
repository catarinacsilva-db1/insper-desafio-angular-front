import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-texto',
  templateUrl: './input-texto.component.html',
  styleUrls: ['./input-texto.component.css']
})
export class InputTextoComponent implements OnInit {

  @Input()
  validaCampo: boolean = false;

  @Input()
  formPai!: FormGroup;

  @Input()
  campo ={
    labelForCampoTexto: '',
    tituloCampoTexto: '',
    formControlNameCampoTexto: '',
    idCampoTexto: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
