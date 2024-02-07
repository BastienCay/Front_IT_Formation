import { Component } from '@angular/core';
import { CardFormationPresentationComponent } from "./card-formation-presentation/card-formation-presentation.component";
import {ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';
import { SessionFormationService } from '../../../services/session-formation.service';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {JsonPipe} from '@angular/common';

@Component({
    selector: 'app-zone-formations',
    standalone: true,
    templateUrl: './zone-formations.component.html',
    styleUrl: './zone-formations.component.css',
    imports: [FormsModule, ReactiveFormsModule,CardFormationPresentationComponent,MatSliderModule,
        MatFormFieldModule,MatCheckboxModule,JsonPipe]
})
export class ZoneFormationsComponent {

    sessionFormations: any[] = [];

    constructor(private SessionFormationService: SessionFormationService,private _formBuilder: FormBuilder){}

    /**
     * Methode qui ce lance une seule fois lors de la conception du components
     */
    ngOnInit(): void{
        this.SessionFormationService.getFormations().subscribe((sessionFormations) => {
            this.sessionFormations = sessionFormations;
        });
    }

    isSessionFormation(listeSessionFormation: any[]): boolean{
        if(listeSessionFormation.length === 0) return false;
        else return true;
    }

    value = 1000;
    value2 = 4000;

    affichageSlider(value: number): string {
        return value + "€";
    }

    formationsListe!: any[];

    filtrePrix(){
        for (let index = 0; index < this.sessionFormations.length; index++) {
            
            if(this.sessionFormations[index].formation.prix >= this.value && this.sessionFormations[index].formation.prix <= this.value2){
                this.formationsListe.push(this.sessionFormations[index]);
            }
        }
        console.log(this.formationsListe);
        this.sessionFormations = this.formationsListe;
    }

    toppings = this._formBuilder.group({
        presentiel: false,
        distanciel: false,
    });

 }
