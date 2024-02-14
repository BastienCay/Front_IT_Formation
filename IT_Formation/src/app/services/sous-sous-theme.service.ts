import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SousSousTheme } from '../models/sous-sous-theme.model';



@Injectable({
    providedIn: 'root'
  })
export class SousSousThemeService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getSousSousThemes(): Observable<SousSousTheme[]>{
        return this.httpClient.get<SousSousTheme[]>(`${this.apiUrl}/sous-sous-theme/all`);
    }
    
    getSousSousTheme(id:number): Observable<SousSousTheme>{
        return this.httpClient.get<SousSousTheme>(`${this.apiUrl}/sous-sous-theme/${id}`);
    }
    
    createSousSousTheme(sousSousTheme: SousSousTheme): Observable<SousSousTheme>{
        return this.httpClient.post<SousSousTheme>(`${this.apiUrl}/sous-sous-theme/add`,sousSousTheme);
    }
    
    updateSousSousTheme(sousSousTheme: SousSousTheme): Observable<SousSousTheme>{
        return this.httpClient.post<SousSousTheme>(`${this.apiUrl}/sous-sous-theme/${sousSousTheme.id}`,sousSousTheme);
    }
    
    deleteSousSousTheme(id: number): Observable<SousSousTheme>{
        return this.httpClient.delete<SousSousTheme>(`${this.apiUrl}/sous-sous-theme/${id}`);
    }
}