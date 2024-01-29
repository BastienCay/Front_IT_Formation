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

  logoGoogle: String = "../../../../assets/Partener/Logo_Google.png";
  logoApple: String = "../../../../assets/Partener/Logo_Apple.png";
  logoFacebook: String = "../../../../assets/Partener/Logo_facebook.png";
  logoAmazon: String = "../../../../assets/Partener/Logo_Amazon.png";
  logoMicrosoft: String = "../../../../assets/Partener/Logo_Microsoft.png";
}
