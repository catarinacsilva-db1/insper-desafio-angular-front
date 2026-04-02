import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/service/interfaces/IUsuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  titulo: string = 'Cadastrar Usuário';

  usuario: IUsuario = {
    Ativo: true,
    Nome: '',
    Sobrenome: '',
    NomeSocial: '',
    DataNascimento: '',
    Cpf: '',
    Senha: ''
  };

  formulario!: FormGroup;


  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      Nome: ['', [Validators.required]],
      Sobrenome: ['', [Validators.required]],
      NomeSocial: [''],
      DataNascimento: ['', [Validators.required]],
      Cpf: ['', [Validators.required]],
      Senha: ['', [Validators.required]]
    });
  }

  buscaTituloBotaoStatus(usuario: IUsuario): string {
    return usuario.Id ? 'Editar Usuário' : 'Cadastro de Usuário';
  }

  validaCampo(campo: string): boolean {
    var campoFormulário = this.formulario.get(campo);
    return campoFormulário?.errors?.['required'] && campoFormulário?.touched;
  }

  cadastrarUsuario(){
    if (this.formulario.valid) {
      this.atribuiUsuario();
      this.usuarioService.criarUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['/']);
        alert('Usuário cadastrado com sucesso!');
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  atribuiUsuario(): void {
    this.usuario.Nome = this.formulario.get('Nome')?.value;
    this.usuario.Sobrenome = this.formulario.get('Sobrenome')?.value;
    this.usuario.NomeSocial = this.formulario.get('NomeSocial')?.value;
    this.usuario.DataNascimento = this.formulario.get('DataNascimento')?.value;
    this.usuario.Cpf = this.formulario.get('Cpf')?.value;
    this.usuario.Senha = this.formulario.get('Senha')?.value;
  }
}
