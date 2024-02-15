import { Component } from '@angular/core';
import { CardFormationPresentationComponent } from "./card-formation-presentation/card-formation-presentation.component";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';
import { FormationService } from '../../../services/formation.service';
import { Formation }  from '../../../models/formation.model';

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