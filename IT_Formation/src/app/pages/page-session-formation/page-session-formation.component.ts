import { Component } from '@angular/core';
import { ZoneSessionComponent } from "./zone-session/zone-session.component";

@Component({
    selector: 'app-page-session-formation',
    standalone: true,
    templateUrl: './page-session-formation.component.html',
    styleUrl: './page-session-formation.component.css',
    imports: [ZoneSessionComponent]
})
export class PageSessionFormationComponent {

}
