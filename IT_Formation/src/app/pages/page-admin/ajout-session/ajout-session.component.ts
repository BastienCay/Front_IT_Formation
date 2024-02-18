import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../../../services/formateur.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormationService } from '../../../services/formation.service';
import { Formation } from '../../../models/formation.model';
import { Formateur } from '../../../models/formateur.model';
import { SessionFormation } from '../../../models/sessionFormation.model';
import { Adresse } from '../../../models/adresse.model';
import { SousTheme } from '../../../models/sous-theme.model';
import { Theme } from '../../../models/theme.model';
import { SessionFormationService } from '../../../services/session-formation.service';
import { Utilisateur } from '../../../models/utilisateur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-session',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-session.component.html',
  styleUrl: './ajout-session.component.css'
})
export class AjoutSessionComponent implements OnInit{

 // Fonction qui se lance lorsque l'on arrive sur la page
  ngOnInit(): void {
    this.formationService.getFormations().subscribe(x => {
      this.formations = x.map(item => {
        return new Formation(
          item.nom,
          item.descriptionMinimum,
          item.descriptionDetailler,
          item.prix,
          item.nbrJour,
          item.reference,
          item.typeFormation,
          item.preRequis,
          item.typeCertification,
          item.metiers,
          item.adresse,
          item.sousTheme
          );
      })
    });
    this.formateurService.getFormateurs().subscribe(x => {
      this.formateurs = x.map(item => {
        return new Formateur(
          item.utilisateur
          
          );
      })
    });
  }


//Création des tableaux vides à remplir pour les afficher en front
formateurs = new Array<Formateur>();
formations = new Array<Formation>();

sessionformation!: SessionFormation;

submitted: boolean = false;

constructor(private formBuilder: FormBuilder, private formateurService: FormateurService, private formationService: FormationService, private sessionFormationService :SessionFormationService, private router: Router){}

nouvelleSession: FormGroup = this.formBuilder.group({
  id: 0,
  dateDebut: ['',[Validators.required]],
  dateFin: ['',[Validators.required]],
  formation: ['',[Validators.required]],
  formateur: ['',[Validators.required]],

});


// Fonction lancé au onSubmit pour ajouter la formation remplie
private addFormation(): void {

  console.log("2", this.nouvelleSession.value)
  // Création de l'objet formation à partir du formGroup
  const newSession = new SessionFormation(
    0,
    this.nouvelleSession.value.dateDebut,
    this.nouvelleSession.value.dateFin,
    new Formation(
      "000000",
      "000000",
      "000000",
      1000,
      10,
      this.nouvelleSession.get('formation')?.value,
      "DISTANCIEL",
      "DEBUTANT",
      "CERTIFICATION",
      "00000",
      new Adresse(
        "00000",
        "00000",
        "00000",
        "00000"
      ),
      new SousTheme(
        "00000",
        new Theme(
          "desi"
        )
      ), 
  ),
  new Formateur(
    new Utilisateur(
      "00000",
      "00000",
      "00000",
      this.nouvelleSession.get('formateur')?.value,
    )
      
    )
  )
    console.log("3", newSession);

  //Envoi de la formation au service pour Srping

  this.sessionFormationService.createSessionFormation(newSession, this.nouvelleSession.value.formateur).subscribe((newSession) => {
    this.sessionformation = newSession;

  });
  
  this.nouvelleSession.reset();
  this.submitted = false;
  this.router.navigate(['/page-admin']);
}

// Fonction qui se lance avec le bouton submit en bas du formulaire
public onSubmit(): void{
  
  this.submitted = true;
  if(this.nouvelleSession.valid){
    console.log("1", this.nouvelleSession);
    this.addFormation();
  }
}



public get form(){
  return this.nouvelleSession.controls;
}

}