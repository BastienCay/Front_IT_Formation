import { Component, OnInit } from '@angular/core';
import { Formation } from '../../../models/formation.model';
import { FormationService } from '../../../services/formation.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SousTheme } from '../../../models/sous-theme.model';
import { SousThemeService } from '../../../services/sous-theme.service';
import { AdresseService } from '../../../services/adresse.service';


@Component({
  selector: 'app-ajout-formation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-formation.component.html',
  styleUrl: './ajout-formation.component.css'
})
export class AjoutFormationComponent implements OnInit {

  ngOnInit(): void {
    this.sousThemeService.getSousThemes().subscribe(x => {
      this.sousThemes = x.map(item => {
        return new SousTheme(
          item.designation,
          );
      })
    });
  }

  formation!: Formation;
   
  

  sousThemes = new Array<Theme>();

  
  
  sousTheme!: SousTheme;


  submitted: boolean = false;


 
  nouveauFormation: FormGroup = this.formBuilder.group({
    designation: ['',[Validators.required]],
    theme: ['',[Validators.required]],
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

  constructor(private formBuilder: FormBuilder, private sousThemeService: SousThemeService, private formationService: FormationService, private adresseService: AdresseService){}

  

  private addSousTheme(): void {

    const newSousTheme = new SousTheme(
      this.nouveauSousTheme.get('designation')?.value,
      this.nouveauSousTheme.get('theme')?.value
    )

    this.sousThemeService.createSousTheme(newSousTheme).subscribe((newSousTheme) => {
      this.sousTheme = newSousTheme
    });
    
    this.nouveauSousTheme.reset();
    this.submitted = false;
  }
  

  public onSubmit(): void{
    console.log("cvalid");
    this.submitted = true;
    if(this.nouveauSousTheme.valid){
      console.log(this.nouveauSousTheme.get('designation')?.value);

      this.addSousTheme();
    }
  }
  
  

  public get form(){
    return this.nouveauSousTheme.controls;
  }

  

}
