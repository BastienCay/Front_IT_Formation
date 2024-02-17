import { Component, Input }                  from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, }                 from '@angular/forms';
import { CardMesFormationsComponent } from './card-mes-formations/card-mes-formations.component';
import { CardFormationPresentationComponent } from "../../page-nos-formations/zone-formations/card-formation-presentation/card-formation-presentation.component";
import { StagiaireSessionFormationService } from '../../../services/stagiaire-session-formation.service';
import SessionUserDTO from '../../../models/sessionUserDTO';
import {MatSliderModule} from '@angular/material/slider';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule}      from '@angular/material/button';
import {MatDividerModule}     from '@angular/material/divider';
import {MatCardModule}        from '@angular/material/card';

@Component({
    selector: 'app-zone-mes-formations',
    standalone: true,
    templateUrl: './zone-mes-formations.component.html',
    styleUrl: './zone-mes-formations.component.css',
    imports: [FormsModule, ReactiveFormsModule, CardMesFormationsComponent, CardFormationPresentationComponent,MatSliderModule, MatCheckboxModule, JsonPipe,MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule,]
})
export class ZoneMesFormationsComponent {
    
  sessionUsers: SessionUserDTO[] = [];

  toppings = this._formBuilder.group({
    presentiel: false,
    distanciel: false
  });

  constructor(private stagiaireSessionFormationService: StagiaireSessionFormationService,private _formBuilder: FormBuilder){}

  ngOnInit(): void{
        this.stagiaireSessionFormationService.getFormations(1).subscribe((sessionUser) =>{
            this.sessionUsers = sessionUser;
        });
  }

  isVide(listeFormation: SessionUserDTO[]): boolean{
      if(listeFormation.length === 0) return false;
      else return true;
  }
}
