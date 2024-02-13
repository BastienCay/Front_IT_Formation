import { Component, OnInit } from '@angular/core';
import Formation from '../../../models/formation.model';
import { FormationService } from '../../../services/formation.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajout-formation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-formation.component.html',
  styleUrl: './ajout-formation.component.css'
})
export class AjoutFormationComponent implements OnInit {
  
  formation!: Formation;

  nouvelleFormation: Formation = this.formBuilder.group ({
    id: 0,
    nom: ['',[Validators.minLength(2),Validators.required,Validators.maxLength(50)]],
    descriptionMinimum: '',
    descriptionDetailler: '',
    prix: 0,
    nbrJour: 0,
    reference: '',
    typeFormation: '',
    preRequis: '',
    typeCertification: '',
    metiers: '',
    adresse: {
        id: 0,
        codePostal: '',
        ville: '',
        rue: '',
        pays: ''
    },
    sousTheme: {
        id: 0,
        designation: '',
        theme: {
            id: 0,
            designation: '',
        }
    }
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder
    ,private formationService: FormationService
    ,private adresseService: AdresseService
    ,private router: Router){}

  ngOnInit(): void {
  }

  ajouterFormation(): void {
    this.formationService.createFormation(this.nouvelleFormation)
      .subscribe(() => {
        console.log('Formation ajoutée avec succès');
        // Réinitialisation du formulaire après l'envoi en back
        this.nouvelleFormation = {
          id: 0,
          nom: '',
          descriptionMinimum: '',
          descriptionDetailler: '',
          prix: 0,
          nbrJour: 0,
          reference: '',
          typeFormation: '',
          preRequis: '',
          typeCertification: '',
          metiers: '',
          adresse: {
          id: 0,
          codePostal: '',
          ville: '',
          rue: '',
          pays: ''
          },
          sousTheme: {
            id: 0,
            designation: '',
            theme: {
              id: 0,
              designation: '',
           }
    }
        };
      });
  }
}