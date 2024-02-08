import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-connection',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire-connection.component.html',
  styleUrl: './formulaire-connection.component.css'
})
export class FormulaireConnectionComponent {
  
  connection: FormGroup = this.formBuilder.group({
    identifiant:  ['',[Validators.minLength(2),Validators.maxLength(50), Validators.required]],
    motDePasse:   ['',[Validators.minLength(2),Validators.required]],
  });
  constructor(private formBuilder: FormBuilder){}

}
