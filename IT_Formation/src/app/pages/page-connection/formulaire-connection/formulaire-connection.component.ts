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
  
  submitted: boolean = false;

  connectionUtilisateurs: any[] = [];

  addDemande(){
    this.connectionUtilisateurs.push(this.connection.value);
    this.submitted = false;
    console.log(this.connection.value)
    this.connection.reset();
  }

  onSubmit(): boolean{
    this.submitted = true;
    if(this.connection.invalid){
      return false;
    }else{
      this.addDemande();
      return true;
    }
  }

  get form(){
    return this.connection.controls;
  }
}
