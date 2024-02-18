import { Component, OnInit } from '@angular/core';
import { Formation } from '../../../models/formation.model';
import { FormationService } from '../../../services/formation.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SousTheme } from '../../../models/sous-theme.model';
import { SousThemeService } from '../../../services/sous-theme.service';
import { AdresseService } from '../../../services/adresse.service';
import { Adresse } from '../../../models/adresse.model';
import { Theme } from '../../../models/theme.model';


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
    this.sousThemeService.getSousThemes().subscribe(x => {
      this.sousThemes = x.map(item => {
        return new SousTheme(
          item.designation,
          new Theme(
            "test"
          )
          );
      })
    });
    this.adresseService.getAdresses().subscribe(x => {
      this.adresses = x.map(item => {
        return new Adresse(
          item.codePostal,
          item.ville,
          item.rue,
          item.pays
          );
      })
    });
  }
  //Création des tableaux vides à remplir pour les afficher en front
  sousThemes = new Array<SousTheme>();
  adresses = new Array<Adresse>();

  formation!: Formation;

  submitted: boolean = false;

  //Récupération et validation des champs du formulaire
  nouvelleFormation: FormGroup = this.formBuilder.group({
    nom: ['',[Validators.required]],
    descriptionMinimum: ['',[Validators.required]],
    descriptionDetailler: ['',[Validators.required]],
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
    const newFormation = new Formation(
      this.nouvelleFormation.value.nom,
      this.nouvelleFormation.value.descriptionMinimum,
      this.nouvelleFormation.value.descriptionDetailler,
      this.nouvelleFormation.value.prix,
      this.nouvelleFormation.value.nbrJour,
      this.nouvelleFormation.value.reference,
      this.nouvelleFormation.value.typeFormation,
      this.nouvelleFormation.value.preRequis,
      this.nouvelleFormation.value.typeCertification,
      this.nouvelleFormation.value.metiers,
      new Adresse(
        "00000",
        this.nouvelleFormation.value.adresse,
        this.nouvelleFormation.value.adresse,
        this.nouvelleFormation.value.adresse
      ),
      new SousTheme(
        this.nouvelleFormation.value.sousTheme,
        new Theme(
          "desi"
        )
        
      )
      
    )
    //Envoi de la formation au service pour Srping
    this.formationService.createFormation(newFormation).subscribe((newFormation) => {
      this.formation = newFormation
    });
    
    this.nouvelleFormation.reset();
    this.submitted = false;
    this.router.navigate(['/page-admin']);
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
