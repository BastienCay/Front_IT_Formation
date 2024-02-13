import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Utilisateur } from '../../../models/utilisateur.model';
import { Compte } from '../../../models/compte.model';
import { CompteService } from '../../../services/compte.service';
import { Stagiaire } from '../../../models/stagiaire.model';
import { StagiaireService } from '../../../services/stagiaire.service';
import { Router } from '@angular/router';
import { validTelephone } from '../../../commons/Validators/telephone.validator';

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
    nom: ['',[Validators.minLength(2),Validators.required,Validators.maxLength(50)]],
    prenom: ['',[Validators.minLength(2),Validators.required,Validators.maxLength(50)]],
    email: ['',[Validators.required,Validators.email]],
    telephone: ['',[Validators.minLength(10),Validators.maxLength(11),Validators.required,validTelephone()]],
    identifiant: ['',[Validators.minLength(8),Validators.maxLength(50),Validators.required]],
    motDePasse: ['',[Validators.minLength(8),Validators.maxLength(50),Validators.required]],
    motDePasseVerif: ['',[Validators.minLength(8),Validators.maxLength(50),Validators.required]],
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private utilisateurService: UtilisateurService
    ,private compteService: CompteService
    ,private stagiaireService: StagiaireService
    ,private router: Router){}

   /**
    * Fonction permettant de vérifier les données du formulaire
    */ 
  private verificationDonnée(){
    this.verificationMotDePasse(this.inscription.get('motDePasse')?.value,this.inscription.get('motDePasseVerif')?.value);
  }

  /**
   * Fonction regroupant toutes les métodes permettant de faire des requête pour la création d'un stagiaire
   * - Création de l'Utilisateur
   */
  private CreationUtilisateur(){
    this.verificationDonnée();

    const newUtilisateur = new Utilisateur( this.inscription.get('nom')?.value,
                                          this.inscription.get('prenom')?.value,
                                          this.inscription.get('email')?.value,
                                          this.inscription.get('telephone')?.value);

    this.utilisateurService.createUtilisateur(newUtilisateur).subscribe((utilisateur) =>{
      this.creationCompteAndStagiaire(utilisateur)
    });
  }

  /**
   * Fonction regroupant toutes les métodes permettant de faire des requête pour la création d'un stagiaire
   * - Création de l'Utilisateur
   */
  creationCompteAndStagiaire(utilisateur: Utilisateur){
    const newCompte = new Compte();
    newCompte.motDePasse = this.inscription.get('motDePasse')?.value;
    newCompte.identifiant = this.inscription.get('identifiant')?.value;
    newCompte.utilisateur = utilisateur;

    this.compteService.createCompte(newCompte).subscribe({
      error: () => (console.error("Erreur creation Compte"),
                    this.utilisateurService.deleteUtilisateur(utilisateur.id)
                  )
    });

    const newStagiaire = new Stagiaire(utilisateur);

    this.stagiaireService.createStagiaire(newStagiaire).subscribe({
      error: () => (console.error("Erreur creation stagiaire"),
                  this.utilisateurService.deleteUtilisateur(utilisateur.id)
                    )
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

  private verificationMotDePasse(motDePasse: string, motDePasseVerif: string){
    if(motDePasse !== motDePasseVerif){
      throw new Error;
    }
  }

  get form(){
    return this.inscription.controls;
  }

}
