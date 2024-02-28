import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import SessionFormationDTO from '../models/DTO/sessionFormationDTO.model';
import { Observable } from 'rxjs';
import { Stagiaire } from '../models/stagiaire.model';

@Injectable({
    providedIn: 'root'
  })
export class SessionFormationService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getSessionFormations(): Observable<SessionFormationDTO[]>{
      return this.httpClient.get<SessionFormationDTO[]>(`${this.apiUrl}/sessions-formations/all`);
  }
  
  getSessionFormation(id:number): Observable<SessionFormationDTO>{
      return this.httpClient.get<SessionFormationDTO>(`${this.apiUrl}/sessions-formations/${id}`);
  }
  
  createSessionFormation(sessionFormationDto: SessionFormationDTO): Observable<SessionFormationDTO>{
      return this.httpClient.post<SessionFormationDTO>(`${this.apiUrl}/sessions-formations/add`,sessionFormationDto);
  }
  
  updateSessionFormation(sessionFormationDto: SessionFormationDTO): Observable<SessionFormationDTO>{
      return this.httpClient.post<SessionFormationDTO>(`${this.apiUrl}/sessions-formations/save`,sessionFormationDto);
  }
  
  deleteSessionFormation(id: number): Observable<SessionFormationDTO>{
      return this.httpClient.delete<SessionFormationDTO>(`${this.apiUrl}/sessions-formations/${id}`);
  }

//   addStagiaire(id: Number, nom: String): Observable<SessionFormationDTO>{
//     return this.httpClient.post<SessionFormationDTO>(`${this.apiUrl}/sessions-formationss/inscription-stagiaire/${id},?nom=${nom}`);
// }
}
