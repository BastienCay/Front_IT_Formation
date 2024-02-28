import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import FormationDTO from '../models/DTO/formationDTO.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class FormationService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getFormations(): Observable<FormationDTO[]>{
        return this.httpClient.get<FormationDTO[]>(`${this.apiUrl}/formations/all`);
      }
    
    getFormation(id:number): Observable<FormationDTO>{
        return this.httpClient.get<FormationDTO>(`${this.apiUrl}/formations/${id}`);
    }
    
    createFormation(formationDto: FormationDTO): Observable<FormationDTO>{
        return this.httpClient.post<FormationDTO>(`${this.apiUrl}/formations/add`,formationDto);
    }
    
    updateFormation(formationDto: FormationDTO): Observable<FormationDTO>{
        return this.httpClient.post<FormationDTO>(`${this.apiUrl}/formations/save`,formationDto);
    }
    
    deleteFormation(id: number): Observable<FormationDTO>{
        return this.httpClient.delete<FormationDTO>(`${this.apiUrl}/formations/${id}`);
    }
}