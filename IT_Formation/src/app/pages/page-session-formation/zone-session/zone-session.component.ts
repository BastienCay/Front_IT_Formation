import { Component, Input } from '@angular/core';
import { SessionFormation } from '../../../models/sessionFormation.model';
import { CardSessionComponent } from './card-session/card-session.component';
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
        this.sessionFormationService.getSessionFormations().subscribe((sessionsFormation) => {
            this.sessions = sessionsFormation;
        });
    }

    isVide(listeSessions: SessionFormation[]): boolean{
        if(listeSessions.length === 0) return false;
        else return true;
    }
}
