import { Component } from '@angular/core';
import { CardFormationPresentationComponent } from "./card-formation-presentation/card-formation-presentation.component";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';
import { SessionFormationService } from '../../../services/session-formation.service';
import { FormationService } from '../../../services/formation.service';
import Formation from '../../../models/formation.model';

@Component({
    selector: 'app-zone-formations',
    standalone: true,
    templateUrl: './zone-formations.component.html',
    styleUrl: './zone-formations.component.css',
    imports: [FormsModule, ReactiveFormsModule,CardFormationPresentationComponent]
})
export class ZoneFormationsComponent {

    formations: Formation[] = [];

    constructor(private FormationService: FormationService){}

    /**
     * Methode qui ce lance une seule fois lors de la conception du components
     */
    ngOnInit(): void{
        let formation = this.FormationService.getFormations().subscribe((formations) => {
            this.formations = formations;
        });

        console.log(formation);
    }

    isVide(listeFormation: Formation[]): boolean{
        if(listeFormation.length === 0) return false;
        else return true;
    }

 }
