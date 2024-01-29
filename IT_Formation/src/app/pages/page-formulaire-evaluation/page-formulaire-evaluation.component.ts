import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";
import { FormulaireEvaluationComponent } from "./formulaire-evaluation/formulaire-evaluation.component";

@Component({
    selector: 'app-page-formulaire-evaluation',
    standalone: true,
    templateUrl: './page-formulaire-evaluation.component.html',
    styleUrl: './page-formulaire-evaluation.component.css',
    imports: [HeaderComponent, FooterComponent, FormulaireEvaluationComponent]
})
export class PageFormulaireEvaluationComponent {

}
