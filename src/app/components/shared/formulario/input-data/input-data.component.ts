import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  @Input()
  validaCampo: boolean = false;

  @Input()
  formPai!: FormGroup;

  @Input()
  campo ={
    labelForCampoData: '',
    tituloCampoData: '',
    formControlNameCampoData: '',
    idCampoData: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
