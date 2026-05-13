import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FORM_CONFIG, IConteudoForm } from 'src/app/service/constantes/conteudoFormulario';
import { IUsuario } from 'src/app/service/interfaces/IUsuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { validadorConfirmarSenha, validadorRequisitosSenha } from '../validador/validador-senha';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  conteudo!: IConteudoForm;

  usuario: IUsuario = {
    id: 0,
    ativo: true,
    nome: '',
    sobrenome: '',
    nomeSocial: '',
    dataNascimento: '',
    cpf: '',
    senha: ''
  };

  formulario!: FormGroup;
  id?: number


  constructor(
    private usuarioService: UsuarioService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      Nome: ['', [Validators.required]],
      Sobrenome: ['', [Validators.required]],
      NomeSocial: [''],
      DataNascimento: ['', [Validators.required]],
      Cpf: ['', [Validators.required]],
      Senha: ['', [Validators.required, validadorRequisitosSenha()]], //valida apenas senha
      SenhaConfirmar: ['', [Validators.required]]
    },
    {
      validators: validadorConfirmarSenha('Senha', 'SenhaConfirmar') //validador de mais de um campo (senha e confirmar senha)
    });

    this.id = +(this.activeRoute.snapshot.paramMap.get('id') || 0);
    this.conteudo = this.buscaConteudoFormulario();
  }

  ehEdicao(): boolean {
    return !!this.id;
  }

    carregaUsuario(): void {
    this.usuarioService.obterUsuarioPorId(this.id!).subscribe((usuario) => {
      this.usuario = usuario;
      this.formulario.patchValue({
        Nome: usuario.nome,
        Sobrenome: usuario.sobrenome,
        NomeSocial: usuario.nomeSocial,
        DataNascimento: this.datePipe.transform(usuario.dataNascimento, 'yyyy-MM-dd'),
        Cpf: usuario.cpf,
        Senha: usuario.senha
      });
    });
  }

  buscaConteudoFormulario(): IConteudoForm {
    if (this.ehEdicao()) {
      this.conteudo = FORM_CONFIG.EDITAR();
      this.carregaUsuario();
    } else {
      this.conteudo = FORM_CONFIG.CADASTRAR();
    }
    return this.conteudo;
  }

  validaCampo(campo: string): boolean {
    var campoFormulário = this.formulario.get(campo);
    return campoFormulário?.errors?.['required'] && campoFormulário?.touched;
  }

  confirmar(){
    if (this.ehEdicao()) {
      this.editarUsuario();
    } else {
      this.cadastrarUsuario();
    }
  }

  cadastrarUsuario(){
    this.atribuiUsuario();
    if (this.formulario.valid) {
      this.usuarioService.criarUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['/']);
        alert('Usuário cadastrado com sucesso!');
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  editarUsuario(){
      this.atribuiUsuario();
      if (this.formulario.valid && this.usuario.id) {
       this.usuarioService.atualizarUsuario(this.usuario.id, this.usuario).subscribe(() => {
        this.router.navigate(['/']);
        alert('Usuário editado com sucesso!');
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  atribuiUsuario(): void {
    if (this.ehEdicao() && this.id) {
      this.usuario.id = this.id;
    }
    this.usuario.nome = this.formulario.get('Nome')?.value;
    this.usuario.sobrenome = this.formulario.get('Sobrenome')?.value;
    this.usuario.nomeSocial = this.formulario.get('NomeSocial')?.value;
    this.usuario.dataNascimento = this.formulario.get('DataNascimento')?.value;
    this.usuario.cpf = this.formulario.get('Cpf')?.value;
    this.usuario.senha = this.formulario.get('Senha')?.value;
  }

}
