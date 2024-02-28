import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import FormateurDTO from '../models/DTO/formateurDTO.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class FormateurService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getFormateurs(): Observable<FormateurDTO[]>{
        return this.httpClient.get<FormateurDTO[]>(`${this.apiUrl}/formateurs/all`);
      }
    
    getFormateur(id:number): Observable<FormateurDTO>{
        return this.httpClient.get<FormateurDTO>(`${this.apiUrl}/formateurs/${id}`);
    }
    
    createFormateur(formateurDto: FormateurDTO): Observable<FormateurDTO>{
        return this.httpClient.post<FormateurDTO>(`${this.apiUrl}/formateurs/add`,formateurDto);
    }
    
    updateFormateur(formateurDto: FormateurDTO): Observable<FormateurDTO>{
        return this.httpClient.post<FormateurDTO>(`${this.apiUrl}/formateurs/save`,formateurDto);
    }
    
    deleteFormateur(id: number): Observable<FormateurDTO>{
        return this.httpClient.delete<FormateurDTO>(`${this.apiUrl}/formateurs/${id}`);
    }
}