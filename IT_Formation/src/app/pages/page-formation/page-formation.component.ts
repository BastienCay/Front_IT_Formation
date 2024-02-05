import { Component } from '@angular/core';
import { FooterComponent } from "../../commons/footer/footer.component";
import { HeaderComponent } from "../../commons/header/header.component";
import {MatIconModule} from '@angular/material/icon'

@Component({
    selector: 'app-page-formation',
    standalone: true,
    templateUrl: './page-formation.component.html',
    styleUrl: './page-formation.component.css',
    imports: [FooterComponent, HeaderComponent,MatIconModule ]
})
export class PageFormationComponent {

}
