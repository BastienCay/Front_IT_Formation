import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SousThemeDTO from '../models/DTO/sousThemeDTO.model';



@Injectable({
    providedIn: 'root'
  })
export class SousThemeService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getSousThemes(): Observable<SousThemeDTO[]>{
        return this.httpClient.get<SousThemeDTO[]>(`${this.apiUrl}/sous-themes/all`);
    }
    
    getSousTheme(id:number): Observable<SousThemeDTO>{
        return this.httpClient.get<SousThemeDTO>(`${this.apiUrl}/sous-themes/${id}`);
    }
    
    createSousTheme(sousThemeDto: SousThemeDTO): Observable<SousThemeDTO>{
        return this.httpClient.post<SousThemeDTO>(`${this.apiUrl}/sous-themes/add`,sousThemeDto);
    }
    
    updateSousTheme(sousThemeDto: SousThemeDTO): Observable<SousThemeDTO>{
        return this.httpClient.post<SousThemeDTO>(`${this.apiUrl}/sous-themes/save`,sousThemeDto);
    }
    
    deleteSousTheme(id: number): Observable<SousThemeDTO>{
        return this.httpClient.delete<SousThemeDTO>(`${this.apiUrl}/sous-themes/${id}`);
    }
}