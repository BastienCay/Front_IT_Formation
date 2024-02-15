import { Component }                  from '@angular/core';
import { ReactiveFormsModule, FormsModule, }                 from '@angular/forms';
import { CardMesFormationsComponent } from './card-mes-formations/card-mes-formations.component';
import { CardFormationPresentationComponent } from "../../page-nos-formations/zone-formations/card-formation-presentation/card-formation-presentation.component";
import { StagiaireSessionFormationService } from '../../../services/stagiaire-session-formation.service';
import SessionUserDTO from '../../../models/sessionUserDTO';

@Component({
    selector: 'app-zone-mes-formations',
    standalone: true,
    templateUrl: './zone-mes-formations.component.html',
    styleUrl: './zone-mes-formations.component.css',
    imports: [FormsModule, ReactiveFormsModule, CardMesFormationsComponent, CardFormationPresentationComponent]
})
export class ZoneMesFormationsComponent {

  sessionUsers: SessionUserDTO[] = [];

  constructor(private stagiaireSessionFormationService: StagiaireSessionFormationService){}

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
