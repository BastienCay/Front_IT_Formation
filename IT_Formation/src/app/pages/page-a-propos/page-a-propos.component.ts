import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";
import { SaumongComponent } from "../../commons/saumong/saumong.component";

@Component({
    selector: 'app-page-a-propos',
    standalone: true,
    templateUrl: './page-a-propos.component.html',
    styleUrl: './page-a-propos.component.css',
    imports: [HeaderComponent, FooterComponent, SaumongComponent]
})
export class PageAProposComponent {

}
