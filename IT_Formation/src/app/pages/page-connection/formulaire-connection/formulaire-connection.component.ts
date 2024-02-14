import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompteService } from '../../../services/compte.service';
import { Compte } from '../../../models/compte.model';
import { Router } from '@angular/router';
import { Utilisateur } from '../../../models/utilisateur.model';

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
    motDePasse:   ['',[Validators.minLength(2),Validators.maxLength(50),Validators.required]],
  });
  constructor(private formBuilder: FormBuilder,private compteService: CompteService,private router: Router){}
  
  submitted: boolean = false;

  compte!: Compte;

  connectionUtilisateur(){

    const newCompte = new Compte();
    newCompte.identifiant = this.connection.get('identifiant')?.value;
    newCompte.motDePasse = this.connection.get('motDePasse')?.value;

    this.compteService.getbyCompte(newCompte).subscribe((compte) => {
      this.submitted = false;
      this.connection.reset();

      this.router.navigate(['/home-page/'+compte.id]);
    });

  }

  onSubmit(): boolean{
    this.submitted = true;
    if(this.connection.invalid){
      return false;
    }else{
      this.connectionUtilisateur();
      return true;
    }
  }

  get form(){
    return this.connection.controls;
  }
}
