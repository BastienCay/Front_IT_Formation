import { Component } from '@angular/core';
import { CardFormationPresentationComponent } from "./card-formation-presentation/card-formation-presentation.component";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';
import { SessionFormationService } from '../../../services/session-formation.service';

@Component({
    selector: 'app-zone-formations',
    standalone: true,
    templateUrl: './zone-formations.component.html',
    styleUrl: './zone-formations.component.css',
    imports: [FormsModule, ReactiveFormsModule,CardFormationPresentationComponent]
})
export class ZoneFormationsComponent {

    sessionFormations: any[] = [];

    constructor(private SessionFormationService: SessionFormationService){}

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

 }
