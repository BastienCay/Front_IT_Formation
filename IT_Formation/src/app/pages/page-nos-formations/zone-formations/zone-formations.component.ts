import { Component } from '@angular/core';
import { CardFormationPresentationComponent } from "./card-formation-presentation/card-formation-presentation.component";

@Component({
    selector: 'app-zone-formations',
    standalone: true,
    templateUrl: './zone-formations.component.html',
    styleUrl: './zone-formations.component.css',
    imports: [CardFormationPresentationComponent]
})
export class ZoneFormationsComponent {

    formation: any[] = [{
        titre: "Développeur Full Stack Java",
        reference: "TQT22",
        prix: 2123,
        theme: "Développement java",
        
    }];

}
