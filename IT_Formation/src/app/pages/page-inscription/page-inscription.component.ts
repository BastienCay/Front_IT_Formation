import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";
import { FormulaireInscriptionComponent } from "./formulaire-inscription/formulaire-inscription.component";

@Component({
    selector: 'app-page-inscription',
    standalone: true,
    templateUrl: './page-inscription.component.html',
    styleUrl: './page-inscription.component.css',
    imports: [HeaderComponent, FooterComponent, FormulaireInscriptionComponent]
})
export class PageInscriptionComponent {

}
