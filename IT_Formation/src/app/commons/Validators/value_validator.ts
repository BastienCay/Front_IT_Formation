import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  // Attachez votre directive de validation à votre champ de formulaire en utilisant l'attribut HTML "myCustomValidator"
  selector: '[ValueInterditeValidator][ngModel]',
  // Injectez le service NG_VALIDATORS pour que votre directive puisse être utilisée comme un validateur de formulaire
  providers: [{ provide: NG_VALIDATORS, useExisting: ValueInterditeValidator, multi: true }]
})
export class ValueInterditeValidator implements Validator{

  @Input() myValidator!: string;

  validate(control: AbstractControl): ValidationErrors | null {
      if (this.myValidator === "admin") {
        return {'ValeurInterdite': true };
      }else{
        return null;
      }
  }

}