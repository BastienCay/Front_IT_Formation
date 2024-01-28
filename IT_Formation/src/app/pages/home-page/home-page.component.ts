import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";
import { CardHomePageTypeFormationComponent } from "../../commons/card-home-page-type-formation/card-home-page-type-formation.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [HeaderComponent, FooterComponent, CardHomePageTypeFormationComponent]
})
export class HomePageComponent {

    designationFormationPresentiel: String = "Nos formations en présentiel";
    designationFormationDistanciel: String = "Nos formations en distanciel";
    designationFormationSurMesure: String = "Nos formations sur Mesure";

    urlImagePresentiel: String = "../../../assets/others/multi_personnage_noir.svg";
    urlImageDistanciel: String = "../../../assets/others/Screen_black.svg";
    urlImageSurMesure: String = "../../../assets/others/User_time_black.svg";
}
