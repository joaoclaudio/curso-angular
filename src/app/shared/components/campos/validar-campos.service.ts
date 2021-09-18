import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: "root",
})
export class ValidarCamposService {
  constructor() {}

  public messageError(control: AbstractControl): string {
    if (control.errors.required) {
      return "Campo obrigatório";
    } else if (control.errors.minlength) {
      return `Campo precisa ter no mínimo ${control.errors.minlength.requiredLength} caracteres`;
    } else if (control.errors.maxlength) {
      return `Campo pode ter no máximo ${control.errors.maxlength.requiredLength} caracteres`;
    } else if (control.errors.min) {
      return `Campo pricisa ter no mínimo o valor ${control.errors.min.min}`;
    } else if (control.errors.max) {
      return `Campo pode ter no máximo o valor ${control.errors.max.max}`;
    }
  }

  public hasAnyError(control: AbstractControl): boolean {
    return (control.dirty || control.touched) && this.hasError(control);
  }

  private hasError(control: AbstractControl): boolean {
    return !!control.errors;
  }
}
