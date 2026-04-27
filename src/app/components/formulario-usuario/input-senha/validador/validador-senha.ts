import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validadorConfirmarSenha(campoSenha: string, campoConfirmaSenha: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {

    const senhaValor = group.get(campoSenha)?.value;
    const confirmaSenhaValor = group.get(campoConfirmaSenha)?.value;



    if (senhaValor && confirmaSenhaValor && senhaValor !== confirmaSenhaValor) {
      return { senhasDiferentes: true };
    }
    return null;
  };
}

export function validadorRequisitosSenha(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const senhaValor = control.value;

    if (!senhaValor) return null;

    const temMaiuscula = /[A-Z]/.test(senhaValor);
    const temMinuscula = /[a-z]/.test(senhaValor);
    const temNumero = /[0-9]/.test(senhaValor);
    const temTamanhoMinimo = senhaValor.length >= 6;

    const senhaValida = temMaiuscula && temMinuscula && temNumero && temTamanhoMinimo;

    if (!senhaValida) {
      return {
        senhaInvalida: true,
        faltaMaiuscula: !temMaiuscula,
        faltaMinuscula: !temMinuscula,
        faltaNumero: !temNumero,
        tamanhoInvalido: !temTamanhoMinimo
      };
    }
    return null;
  }
};
