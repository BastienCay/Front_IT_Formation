import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Utilisateur } from '../../../models/utilisateur.model';
import { Compte } from '../../../models/compte.model';
import { CompteService } from '../../../services/compte.service';
import { Stagiaire } from '../../../models/stagiaire.model';
import { StagiaireService } from '../../../services/stagiaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-inscription',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire-inscription.component.html',
  styleUrl: './formulaire-inscription.component.css'
})
export class FormulaireInscriptionComponent {

  utilisateur!: Utilisateur;

  inscription: FormGroup = this.formBuilder.group({
    nom: ['',[Validators.minLength(5),Validators.required]],
    prenom: ['',[Validators.minLength(5),Validators.required]],
    email: ['',Validators.required],
    telephone: ['',[Validators.minLength(5),Validators.required]],
    identifiant: ['',[Validators.minLength(5),Validators.required]],
    motDePasse: ['',[Validators.minLength(5),Validators.required]],
    motDePasseVerif: ['',[Validators.minLength(5),Validators.required]],
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private utilisateurService: UtilisateurService
    ,private compteService: CompteService
    ,private stagiaireService: StagiaireService
    ,private router: Router){}

  /**
   * Fonction regroupant toutes les métodes permettant de faire des requête pour la création d'un stagiaire
   * - Création de l'Utilisateur
   * - Création du Compte
   * - Création du Stagiaire
   */
  private CreationUtilisateur(){
    const newUtilisateur = new Utilisateur( this.inscription.get('nom')?.value,
                                          this.inscription.get('prenom')?.value,
                                          this.inscription.get('email')?.value,
                                          this.inscription.get('telephone')?.value);

    this.utilisateurService.createUtilisateur(newUtilisateur).subscribe((utilisateur) =>{
      this.creationCompteAndStagiaire(utilisateur.idUser)
    });
  }

  creationCompteAndStagiaire(idUtilisateur: number){
    console.log(idUtilisateur);
    
    const newCompte = new Compte( this.inscription.get('motDePasse')?.value, 
                                  this.inscription.get('identifiant')?.value,
                                  idUtilisateur);

    this.compteService.createCompte(newCompte).subscribe({
      error: () => console.error("Erreur creation Compte")
    });

    const newStagiaire = new Stagiaire(idUtilisateur);

    this.stagiaireService.createStagiaire(newStagiaire).subscribe({
      error: () => console.error("Erreur creation stagiaire")
    });

    this.submitted = false;
    this.inscription.reset();

    this.router.navigate(['connection']);
  }

  onSubmit(): boolean{
    this.submitted = true;
    if(this.inscription.invalid){
      return false;
    }else{
      this.CreationUtilisateur();
      return true;
    }
  }

  get form(){
    return this.inscription.controls;
  }

}
