import { Component, Input } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NavBarAdminComponent } from "./nav-bar-admin/nav-bar-admin.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [NavBarComponent, NavBarAdminComponent]
})

export class HeaderComponent {

    @Input()
    typeCompte!: String | null;

}
