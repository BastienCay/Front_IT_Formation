import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SousTheme } from '../models/sous-theme.model';



@Injectable({
    providedIn: 'root'
  })
export class SousThemeService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getSousThemes(): Observable<SousTheme[]>{
        return this.httpClient.get<SousTheme[]>(`${this.apiUrl}/sousThemes/all`);
    }
    
    getSousTheme(id:number): Observable<SousTheme>{
        return this.httpClient.get<SousTheme>(`${this.apiUrl}/sousThemes/${id}`);
    }
    
    createSousTheme(sousTheme: SousTheme): Observable<SousTheme>{
        return this.httpClient.post<SousTheme>(`${this.apiUrl}/sousThemes/add`,sousTheme);
    }
    
    updateSousTheme(sousTheme: SousTheme): Observable<SousTheme>{
        return this.httpClient.post<SousTheme>(`${this.apiUrl}/sousThemes/${sousTheme.id}`,sousTheme);
    }
    
    deleteSousTheme(id: number): Observable<SousTheme>{
        return this.httpClient.delete<SousTheme>(`${this.apiUrl}/sousThemes/${id}`);
    }
}