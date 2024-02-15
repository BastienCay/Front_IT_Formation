import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Theme } from '../models/theme.model';


@Injectable({
    providedIn: 'root'
  })
export class ThemeService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getThemes(): Observable<Theme[]>{
        return this.httpClient.get<Theme[]>(`${this.apiUrl}/themes/all`);
    }
    
    getTheme(id:number): Observable<Theme>{
        return this.httpClient.get<Theme>(`${this.apiUrl}/themes/${id}`);
    }
    
    createTheme(theme: Theme): Observable<Theme>{
        return this.httpClient.post<Theme>(`${this.apiUrl}/themes/add`,theme);
    }
    
    updateTheme(theme: Theme): Observable<Theme>{
        return this.httpClient.post<Theme>(`${this.apiUrl}/themes/save`,theme);
    }
    
    deleteTheme(id: number): Observable<Theme>{
        return this.httpClient.delete<Theme>(`${this.apiUrl}/themes/${id}`);
    }
}