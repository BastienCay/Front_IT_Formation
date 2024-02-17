import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionFormation } from '../models/sessionFormation.model';
import { Observable } from 'rxjs';
import { Stagiaire } from '../models/stagiaire.model';

@Injectable({
    providedIn: 'root'
  })
export class SessionFormationService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getSessionFormations(): Observable<SessionFormation[]>{
      return this.httpClient.get<SessionFormation[]>(`${this.apiUrl}/sessions-formationss/all`);
  }
  
  getSessionFormation(id:number): Observable<SessionFormation>{
      return this.httpClient.get<SessionFormation>(`${this.apiUrl}/sessions-formationss/${id}`);
  }
  
  createSessionFormation(sessionFormation: SessionFormation, telephone:string): Observable<SessionFormation>{
    const queryParams = `?telephone=${telephone}`;
      return this.httpClient.post<SessionFormation>(`${this.apiUrl}/sessions-formationss/add`,sessionFormation + queryParams);
  }
  
  updateSessionFormation(sessionFormation: SessionFormation): Observable<SessionFormation>{
      return this.httpClient.post<SessionFormation>(`${this.apiUrl}/sessions-formationss/save`,sessionFormation);
  }
  
  deleteSessionFormation(id: number): Observable<SessionFormation>{
      return this.httpClient.delete<SessionFormation>(`${this.apiUrl}/sessions-formationss/${id}`);
  }

//   addStagiaire(id: Number, nom: String): Observable<SessionFormation>{
//     return this.httpClient.post<SessionFormation>(`${this.apiUrl}/sessions-formationss/inscription-stagiaire/${id},?nom=${nom}`);
// }
}
