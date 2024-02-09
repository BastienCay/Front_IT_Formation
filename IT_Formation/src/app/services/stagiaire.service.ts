import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stagiaire } from '../models/stagiaire.model';

@Injectable({
    providedIn: 'root'
  })
export class StagiaireService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getStagiaires(): Observable<Stagiaire[]>{
        return this.httpClient.get<Stagiaire[]>(`${this.apiUrl}/Stagiaires/all`);
    }
    
    getStagiaire(id:number): Observable<Stagiaire>{
        return this.httpClient.get<Stagiaire>(`${this.apiUrl}/Stagiaires/${id}`);
    }
    
    createStagiaire(stagiaire: Stagiaire): Observable<Stagiaire>{
        return this.httpClient.post<Stagiaire>(`${this.apiUrl}/Stagiaires/add`,stagiaire);
    }
    
    updateStagiaire(stagiaire: Stagiaire): Observable<Stagiaire>{
        return this.httpClient.post<Stagiaire>(`${this.apiUrl}/Stagiaires/${stagiaire.id}`,stagiaire);
    }
    
    deleteStagiaire(id: number): Observable<Stagiaire>{
        return this.httpClient.delete<Stagiaire>(`${this.apiUrl}/Stagiaires/${id}`);
    }
}