import { Component } from '@angular/core';
import { CardFormationPresentationComponent } from "./card-formation-presentation/card-formation-presentation.component";
import {ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';
import { SessionFormationService } from '../../../services/session-formation.service';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {JsonPipe} from '@angular/common';
import SessionFormation from '../../../models/sessionFormation.model';

@Component({
    selector: 'app-zone-formations',
    standalone: true,
    templateUrl: './zone-formations.component.html',
    styleUrl: './zone-formations.component.css',
    imports: [FormsModule, ReactiveFormsModule,CardFormationPresentationComponent,MatSliderModule,
        MatFormFieldModule,MatCheckboxModule,JsonPipe]
})
export class ZoneFormationsComponent {

    sessionFormationsMemoire: SessionFormation[] = [];
    sessionFormationsActif: SessionFormation[] = [];

    constructor(private SessionFormationService: SessionFormationService,private _formBuilder: FormBuilder){}

    /**
     * Methode qui ce lance une seule fois lors de la conception du components
     */
    ngOnInit(): void{
        this.SessionFormationService.getFormations().subscribe((sessionFormations) => {
            this.sessionFormationsMemoire = sessionFormations;
            this.sessionFormationsActif = sessionFormations;
        });
    }

    isEmpty(listeSessionFormation: SessionFormation[]): boolean{
        if(listeSessionFormation.length === 0) return false;
        else return true;
    }

    value = 1000;
    value2 = 4000;

    affichageSlider(value: number): string {
        return value + "€";
    }

    toppings = this._formBuilder.group({
        presentiel: false,
        distanciel: false,
    });

    tableauTemporaire!: SessionFormation[];

    public filterPrixFormation(){
        this.sessionFormationsActif.pop();
        this.sessionFormationsActif = this.sessionFormationsMemoire;

        console.log("Avant " + this.sessionFormationsActif.length);

        this.tableauTemporaire = this.sessionFormationsActif.filter(
            (session) => session.formation.prix >= this.value && session.formation.prix <= this.value2
        );
        
        this.sessionFormationsActif = this.tableauTemporaire;
        console.log("Apres " +this.sessionFormationsActif.length);
    } 
 }
