import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [HeaderComponent]
})
export class HomePageComponent {

}
