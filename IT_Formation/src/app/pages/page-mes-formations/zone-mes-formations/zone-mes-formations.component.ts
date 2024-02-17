import { Component, Input }                  from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, }                 from '@angular/forms';
import { CardMesFormationsComponent } from './card-mes-formations/card-mes-formations.component';
import { CardFormationPresentationComponent } from "../../page-nos-formations/zone-formations/card-formation-presentation/card-formation-presentation.component";
import { StagiaireSessionFormationService } from '../../../services/stagiaire-session-formation.service';
import SessionUserDTO from '../../../models/sessionUserDTO';
import {MatSliderModule} from '@angular/material/slider';
import {CommonModule, JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule}      from '@angular/material/button';
import {MatDividerModule}     from '@angular/material/divider';
import {MatCardModule}        from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-zone-mes-formations',
    standalone: true,
    templateUrl: './zone-mes-formations.component.html',
    styleUrl: './zone-mes-formations.component.css',
    imports: [FormsModule, ReactiveFormsModule, CardMesFormationsComponent, CardFormationPresentationComponent,MatSliderModule, MatCheckboxModule, JsonPipe,MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule,
      CommonModule,RouterModule]
})
export class ZoneMesFormationsComponent {
    
  sessionUsers: SessionUserDTO[] = [];

  isValider!: boolean

  toppings = this._formBuilder.group({
    presentiel: false,
    distanciel: false
  });

  constructor(private stagiaireSessionFormationService: StagiaireSessionFormationService,private _formBuilder: FormBuilder){}

  ngOnInit(): void{
        this.stagiaireSessionFormationService.getFormations(1).subscribe((sessionUser) =>{
            this.sessionUsers = sessionUser;
        });

        if(sessionStorage.getItem("isEvaluer") === "1"){
          this.isValider = true;
        }else{
          this.isValider = false;
        }
        
  }

  isVide(listeFormation: SessionUserDTO[]): boolean{
      if(listeFormation.length === 0) return false;
      else return true;
  }

  onClick(){
    sessionStorage.setItem("isEvaluer","1")
  }
}
