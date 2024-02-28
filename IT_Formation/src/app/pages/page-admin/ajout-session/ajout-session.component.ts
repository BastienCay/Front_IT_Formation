import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../../../services/formateur.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormationService } from '../../../services/formation.service';
import { SessionFormationService } from '../../../services/session-formation.service';
import { Router } from '@angular/router';
import FormationDTO from '../../../models/DTO/formationDTO.model';
import FormateurDTO from '../../../models/DTO/formateurDTO.model';
import SessionFormationDTO from '../../../models/DTO/sessionFormationDTO.model';

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
    this.formationService.getFormations().subscribe(formationDto => {
      this.formations = formationDto;
    });
    this.formateurService.getFormateurs().subscribe(formateurDto => {
      this.formateurs = formateurDto;
    });
  }


//Création des tableaux vides à remplir pour les afficher en front
formateurs = new Array<FormateurDTO>();
formations = new Array<FormationDTO>();

sessionformationDto!: SessionFormationDTO;

submitted: boolean = false;

constructor(private formBuilder: FormBuilder, private formateurService: FormateurService, private formationService: FormationService, private sessionFormationService :SessionFormationService, private router: Router){}

nouvelleSession: FormGroup = this.formBuilder.group({
  dateDebut: ['',[Validators.required]],
  dateFin: ['',[Validators.required]],
  idFormation: ['',[Validators.required]],
  idFormateur: ['',[Validators.required]],
});


// Fonction lancé au onSubmit pour ajouter la formation remplie
private addFormation(): void {

  // Création de l'objet formation à partir du formGroup
  this.sessionformationDto = this.nouvelleSession.value;

  //Envoi de la formation au service pour Spring

  this.sessionFormationService.createSessionFormation(this.sessionformationDto).subscribe(() => {
    this.nouvelleSession.reset();
    this.submitted = false;
    this.router.navigate(['/page-admin']);
  });
  
  
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