import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";
import { ZoneMesFormationsComponent } from "./zone-mes-formations/zone-mes-formations.component";

@Component({
    selector: 'app-page-mes-formations',
    standalone: true,
    templateUrl: './page-mes-formations.component.html',
    styleUrl: './page-mes-formations.component.css',
    imports: [HeaderComponent, FooterComponent, ZoneMesFormationsComponent]
})
export class PageMesFormationsComponent {

}
