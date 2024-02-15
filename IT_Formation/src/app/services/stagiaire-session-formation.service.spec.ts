import { TestBed } from '@angular/core/testing';

import {SessionFormationService} from './session-formation.service';
import { StagiaireSessionFormationService } from './stagiaire-session-formation.service';

describe('SessionFormationService', () => {
    let service: StagiaireSessionFormationService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StagiaireSessionFormationService);
    });
    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});