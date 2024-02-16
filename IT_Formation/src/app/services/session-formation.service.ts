import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import SessionFormation from '../models/sessionFormation.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class SessionFormationService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getFormations(): Observable<SessionFormation[]>{
        return this.httpClient.get<SessionFormation[]>(`${this.apiUrl}/sessions-formations/all`);
      }
    
    getFormation(id:number): Observable<SessionFormation>{
        return this.httpClient.get<SessionFormation>(`${this.apiUrl}/sessions-formations/${id}`);
    }
    
    createFormation(sessionFormation: SessionFormation): Observable<SessionFormation>{
        return this.httpClient.post<SessionFormation>(`${this.apiUrl}/sessions-formations/`,sessionFormation);
    }
}