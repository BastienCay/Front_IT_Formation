import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import ThemeDTO  from '../models/DTO/themeDTO.model';


@Injectable({
    providedIn: 'root'
  })
export class ThemeService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getThemes(): Observable<ThemeDTO[]>{
        return this.httpClient.get<ThemeDTO[]>(`${this.apiUrl}/themes/all`);
    }
    
    getTheme(id:number): Observable<ThemeDTO>{
        return this.httpClient.get<ThemeDTO>(`${this.apiUrl}/themes/${id}`);
    }
    
    createTheme(themeDto: ThemeDTO): Observable<ThemeDTO>{
        return this.httpClient.post<ThemeDTO>(`${this.apiUrl}/themes/add`,themeDto);
    }
    
    updateTheme(themeDto: ThemeDTO): Observable<ThemeDTO>{
        return this.httpClient.post<ThemeDTO>(`${this.apiUrl}/themes/save`,themeDto);
    }
    
    deleteTheme(id: number): Observable<ThemeDTO>{
        return this.httpClient.delete<ThemeDTO>(`${this.apiUrl}/themes/${id}`);
    }
}