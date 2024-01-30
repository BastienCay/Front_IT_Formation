import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire-contact.component.html',
  styleUrl: './formulaire-contact.component.css'
})
export class FormulaireContactComponent {

  demande: FormGroup = this.formBuilder.group({
    nom: ['',[Validators.minLength(5),Validators.required]],
    prenom: ['',[Validators.minLength(5),Validators.required]],
    email: ['',Validators.required],
    telephone: ['',[Validators.minLength(5),Validators.required]],
    message: ['',[Validators.minLength(5),Validators.required]]
  });

  submitted: boolean = false;

  demandeUtilisateurs: any[] = [];

  constructor(private formBuilder: FormBuilder){}

  addDemande(){
    this.demandeUtilisateurs.push(this.demande.value);
    this.submitted = false;
    console.log(this.demande.value)
    this.demande.reset();
  }
  onSubmit(): boolean{
    this.submitted = true;
    if(this.demande.invalid){
      return false;
    }else{
      this.addDemande();
      return true;
    }
  }

  get form(){
    return this.demande.controls;
  }

}
