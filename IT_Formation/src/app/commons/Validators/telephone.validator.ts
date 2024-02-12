import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validTelephone(): ValidatorFn{

    return (control:AbstractControl): ValidationErrors | null =>{

      const value = control.value;

      if (!value) {
        return null;
      }

      let isNotNumericString = false;

      for (let i = 0; i < value.length; i++) {
        const char = value.charAt(i);
        if (isNaN(Number(char))) {
          isNotNumericString = true;
          break;
        }
      }
      
      return isNotNumericString ? {passwordNumeric:false}: null;
    }

}