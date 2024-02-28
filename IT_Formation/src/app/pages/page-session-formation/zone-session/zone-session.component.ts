import { Component, Input } from '@angular/core';
import { CardSessionComponent } from './card-session/card-session.component';
import { SessionFormationService } from '../../../services/session-formation.service';
import SessionFormationDTO from '../../../models/DTO/sessionFormationDTO.model';

@Component({
    selector: 'app-zone-session',
    standalone: true,
    templateUrl: './zone-session.component.html',
    styleUrl: './zone-session.component.css',
    imports: [CardSessionComponent]
})
export class ZoneSessionComponent {

    sessions: SessionFormationDTO[] = [];

    constructor(private sessionFormationService: SessionFormationService){}
    
    ngOnInit(): void{
        this.sessionFormationService.getSessionFormations().subscribe((sessionsFormationDto) => {
            this.sessions = sessionsFormationDto;
        });
    }

    isVide(listeSessions: SessionFormationDTO[]): boolean{
        if(listeSessions.length === 0) return false;
        else return true;
    }
}
