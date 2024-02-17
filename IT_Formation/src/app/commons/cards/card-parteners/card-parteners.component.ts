import { Component } from '@angular/core';
import { CardPartenerComponent } from "./card-partener/card-partener.component";

@Component({
    selector: 'app-card-parteners',
    standalone: true,
    templateUrl: './card-parteners.component.html',
    styleUrl: './card-parteners.component.css',
    imports: [CardPartenerComponent]
})
export class CardPartenersComponent {

  logoIbCegos: String = "../../../../assets/Partener/logo-ib.png";
  logoPoleEmploi: String = "../../../../assets/Partener/Logo_pole_emploi.png"
  logoHautDeFrance: String = "../../../../assets/Partener/Logo_haut_de_france.svg";
}
