import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";
import { CardPartenersComponent } from "../../commons/cards/card-parteners/card-parteners.component";
import { CardHomePageTypeFormationComponent } from "../../commons/cards/card-home-page-type-formation/card-home-page-type-formation.component";
import { CardNotationComponent } from "../../commons/cards/card-notation/card-notation.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [HeaderComponent, FooterComponent, CardPartenersComponent, CardHomePageTypeFormationComponent, CardNotationComponent]
})
export class HomePageComponent {

    designationFormationPresentiel: String = "Nos formations en présentiel";
    designationFormationDistanciel: String = "Nos formations en distanciel";
    designationFormationSurMesure: String = "Nos formations sur Mesure";

    urlImagePresentielWhite: String = "../../../assets/others/multi_personnage_white.svg";
    urlImageDistancielWhite: String = "../../../assets/others/Screen_white.svg";
    urlImageSurMesureWhite: String = "../../../assets/others/User_time_white.svg";

    urlImagePresentielBlack: String = "../../../assets/others/multi_personnage_noir.svg";
    urlImageDistancielBlack: String = "../../../assets/others/Screen_black.svg";
    urlImageSurMesureBlack: String = "../../../assets/others/User_time_black.svg";
}
