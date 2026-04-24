import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validadorSenha(senha: string, confirmaSenha: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {

    const senhaValor = group.get(senha)?.value;
    const confirmaSenhaValor = group.get(confirmaSenha)?.value;

    if (senhaValor && confirmaSenhaValor && senhaValor !== confirmaSenhaValor) {
      return { senhasDiferentes: true };
    }
    return null;
  };
}
