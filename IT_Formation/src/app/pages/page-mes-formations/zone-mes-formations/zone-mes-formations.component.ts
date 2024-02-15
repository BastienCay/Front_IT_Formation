import { Component }                  from '@angular/core';
import { FormGroup, 
          FormBuilder, 
          Validators, 
          ReactiveFormsModule, 
          FormsModule, 
          FormArray }                 from '@angular/forms';
import { SessionFormationService }    from '../../../services/session-formation.service';
import { FormationService }           from '../../../services/formation.service';
import Formation                      from '../../../models/formation.model';
import { CardMesFormationsComponent } from './card-mes-formations/card-mes-formations.component';

@Component({
  selector: 'app-zone-mes-formations',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CardMesFormationsComponent],
  templateUrl: './zone-mes-formations.component.html',
  styleUrl: './zone-mes-formations.component.css'
})
export class ZoneMesFormationsComponent {

  mesformations: Formation[] = [];

  constructor(private FormationService: FormationService){}

  /**
   * Methode qui ce lance une seule fois lors de la conception du components
   */
  ngOnInit(): void{
      let formation = this.FormationService.getFormations().subscribe((Formation) => {
      });

      console.log(formation);
  }

  isVide(listeFormation: Formation[]): boolean{
      if(listeFormation.length === 0) return false;
      else return true;
  }
}
