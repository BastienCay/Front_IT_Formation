import { Component } from '@angular/core';
import { HeaderComponent } from "../../commons/header/header.component";
import { FooterComponent } from "../../commons/footer/footer.component";
import { ZoneFormationsComponent } from "./zone-formations/zone-formations.component";
import { SearchBarComponent } from "../../commons/search-bar/search-bar.component";

@Component({
    selector: 'app-page-nos-formations',
    standalone: true,
    templateUrl: './page-nos-formations.component.html',
    styleUrl: './page-nos-formations.component.css',
    imports: [HeaderComponent, FooterComponent, ZoneFormationsComponent, SearchBarComponent]
})
export class PageNosFormationsComponent {

}
