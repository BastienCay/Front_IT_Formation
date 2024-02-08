import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";

@Component({
    selector: 'app-page-404',
    standalone: true,
    templateUrl: './page-404.component.html',
    styleUrl: './page-404.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class Page404Component {

}
