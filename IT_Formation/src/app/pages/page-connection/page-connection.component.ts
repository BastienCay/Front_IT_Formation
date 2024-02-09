import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";
import { FormulaireConnectionComponent } from "./formulaire-connection/formulaire-connection.component";
import { SaumongComponent } from "../../commons/saumong/saumong.component";

@Component({
    selector: 'app-page-connection',
    standalone: true,
    templateUrl: './page-connection.component.html',
    styleUrl: './page-connection.component.css',
    imports: [HeaderComponent, FooterComponent, FormulaireConnectionComponent, SaumongComponent]
})
export class PageConnectionComponent {

}
