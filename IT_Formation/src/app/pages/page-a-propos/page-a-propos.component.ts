import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";

@Component({
    selector: 'app-page-a-propos',
    standalone: true,
    templateUrl: './page-a-propos.component.html',
    styleUrl: './page-a-propos.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class PageAProposComponent {

}
