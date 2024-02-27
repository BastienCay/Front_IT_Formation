import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AdresseDTO from '../models/DTO/adresseDTO.model';



@Injectable({
    providedIn: 'root'
  })
export class AdresseService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getAdresses(): Observable<AdresseDTO[]>{
        return this.httpClient.get<AdresseDTO[]>(`${this.apiUrl}/adresses/all`);
    }
    
    getAdresse(id:number): Observable<AdresseDTO>{
        return this.httpClient.get<AdresseDTO>(`${this.apiUrl}/adresses/${id}`);
    }
    
    createAdresse(adresseDto: AdresseDTO): Observable<AdresseDTO>{
        return this.httpClient.post<AdresseDTO>(`${this.apiUrl}/adresses/add`,adresseDto);
    }
    
    updateAdresse(adresseDto: AdresseDTO): Observable<AdresseDTO>{
        return this.httpClient.post<AdresseDTO>(`${this.apiUrl}/adresses/save`,adresseDto);
    }
    
    deleteAdresse(id: number): Observable<AdresseDTO>{
        return this.httpClient.delete<AdresseDTO>(`${this.apiUrl}/adresses/${id}`);
    }
}