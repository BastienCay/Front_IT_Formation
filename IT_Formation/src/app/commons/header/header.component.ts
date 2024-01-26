import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [NavBarComponent]
})

export class HeaderComponent {

}
