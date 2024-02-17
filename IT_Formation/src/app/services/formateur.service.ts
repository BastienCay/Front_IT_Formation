import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../models/formateur.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class FormateurService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getFormateurs(): Observable<Formateur[]>{
        return this.httpClient.get<Formateur[]>(`${this.apiUrl}/formateurs/all`);
      }
    
    getFormateur(id:number): Observable<Formateur>{
        return this.httpClient.get<Formateur>(`${this.apiUrl}/formateurs/${id}`);
    }
    
    createFormateur(formateur: Formateur): Observable<Formateur>{
        return this.httpClient.post<Formateur>(`${this.apiUrl}/formateurs/add`,formateur);
    }
    
    updateFormateur(formateur: Formateur): Observable<Formateur>{
        return this.httpClient.post<Formateur>(`${this.apiUrl}/formateurs/save`,formateur);
    }
    
    deleteFormateur(id: number): Observable<Formateur>{
        return this.httpClient.delete<Formateur>(`${this.apiUrl}/formateurs/${id}`);
    }
}