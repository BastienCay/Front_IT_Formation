import { Component } from '@angular/core';
import { CardSessionComponent } from "./card-session/card-session.component";
import SessionFormation from '../../../models/sessionFormation.model';
import { SessionFormationService } from '../../../services/session-formation.service';

@Component({
    selector: 'app-zone-session',
    standalone: true,
    templateUrl: './zone-session.component.html',
    styleUrl: './zone-session.component.css',
    imports: [CardSessionComponent]
})
export class ZoneSessionComponent {

    sessions: SessionFormation[] = [];

    constructor(private sessionFormationService: SessionFormationService){}
    
    ngOnInit(): void{
        this.sessionFormationService.getFormations().subscribe((sessions) => {
            this.sessions = sessions;
        });
    }

    isVide(listeSessions: SessionFormation[]): boolean{
        if(listeSessions.length === 0) return false;
        else return true;
    }
}
