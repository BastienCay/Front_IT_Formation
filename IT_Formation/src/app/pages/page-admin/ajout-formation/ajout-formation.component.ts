import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../../services/formation.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SousThemeService } from '../../../services/sous-theme.service';
import { AdresseService } from '../../../services/adresse.service';
import SousThemeDTO from '../../../models/DTO/sousThemeDTO.model';
import AdresseDTO from '../../../models/DTO/adresseDTO.model';
import FormationDTO from '../../../models/DTO/formationDTO.model';


@Component({
  selector: 'app-ajout-formation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-formation.component.html',
  styleUrl: './ajout-formation.component.css'
})
export class AjoutFormationComponent implements OnInit {

  //Fonction qui se lance lorsque l'on arrive sur la page
  ngOnInit(): void {
    this.sousThemeService.getSousThemes().subscribe(sousThemeDTO => {
      this.sousThemes = sousThemeDTO
      });

    this.adresseService.getAdresses().subscribe(adresseDto => {
      this.adresses = adresseDto;
    });

  }

  //Création des tableaux vides à remplir pour les afficher en front
  sousThemes = new Array<SousThemeDTO>();
  adresses = new Array<AdresseDTO>();

  formationDto!: FormationDTO;

  submitted: boolean = false;

  //Récupération et validation des champs du formulaire
  nouvelleFormation: FormGroup = this.formBuilder.group({
    nom: ['',[Validators.required]],
    descriptionMinimum: ['',[Validators.required]],
    descriptionDetaillee: ['',[Validators.required]],
    prix: ['',[Validators.required]],
    nbrJour: ['',[Validators.required]],
    reference: ['',[Validators.required]],
    typeFormation: ['',[Validators.required]],
    preRequis: ['',[Validators.required]],
    typeCertification: ['',[Validators.required]],
    metiers: ['',[Validators.required]],
    adresse: ['',[Validators.required]],
    sousTheme: ['',[Validators.required]],

  });

  constructor(private formBuilder: FormBuilder, private sousThemeService: SousThemeService, private formationService: FormationService, private adresseService: AdresseService,private router: Router){}

  
// Fonction lancé au onSubmit pour ajouter la formation remplie
  private addFormation(): void {

    // Création de l'objet formation à partir du formGroup
    this.formationDto = this.nouvelleFormation.value;

    //Envoi de la formation au service pour Spring
    this.formationService.createFormation(this.formationDto).subscribe(() => {
      this.submitted = false;
      this.nouvelleFormation.reset();      
      this.router.navigate(['/page-admin']);
    });
    
    
  }
  
// Fonction qui se lance avec le bouton submit en bas du formulaire
  public onSubmit(): void{
    console.log(this.nouvelleFormation);
    this.submitted = true;
    if(this.nouvelleFormation.valid){
      
      this.addFormation();
    }
  }
  
  

  public get form(){
    return this.nouvelleFormation.controls;
  }

  

}
