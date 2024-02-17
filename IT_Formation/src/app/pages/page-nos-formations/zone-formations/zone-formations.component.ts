import { Component } from '@angular/core';
import { CardFormationPresentationComponent } from "./card-formation-presentation/card-formation-presentation.component";
import { ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';
import { FormationService } from '../../../services/formation.service';
import { Formation }  from '../../../models/formation.model';
import {MatSliderModule} from '@angular/material/slider';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
    selector: 'app-zone-formations',
    standalone: true,
    templateUrl: './zone-formations.component.html',
    styleUrl: './zone-formations.component.css',
    imports: [FormsModule, ReactiveFormsModule,CardFormationPresentationComponent,MatSliderModule, MatCheckboxModule, JsonPipe]
})
export class ZoneFormationsComponent {

    formations: Formation[] = [];

    toppings = this._formBuilder.group({
        presentiel: false,
        distanciel: false
      });

    constructor(private FormationService: FormationService,private _formBuilder: FormBuilder){}
    
    ngOnInit(): void{
        this.FormationService.getFormations().subscribe((formations) => {
            this.formations = formations;
        });
    }

    isVide(listeFormation: Formation[]): boolean{
        if(listeFormation.length === 0) return false;
        else return true;
    }
 }