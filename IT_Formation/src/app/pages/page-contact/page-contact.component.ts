import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";
import { FormulaireContactComponent } from "./formulaire-contact/formulaire-contact.component";
import { SaumongComponent } from "../../commons/saumong/saumong.component";

@Component({
    selector: 'app-page-contact',
    standalone: true,
    templateUrl: './page-contact.component.html',
    styleUrl: './page-contact.component.css',
    imports: [HeaderComponent, FooterComponent, FormulaireContactComponent, SaumongComponent]
})
export class PageContactComponent {

}
