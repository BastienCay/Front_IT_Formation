import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte.model';

@Injectable({
    providedIn: 'root'
  })
export class CompteService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getComptes(): Observable<Compte[]>{
        return this.httpClient.get<Compte[]>(`${this.apiUrl}/comptes/all`);
    }
    
    getCompte(id:number): Observable<Compte>{
        return this.httpClient.get<Compte>(`${this.apiUrl}/comptes/${id}`);
    }

    getbyCompte(compte:Compte): Observable<Compte>{
        let queryParams = new HttpParams().append("identifiant",compte.identifiant)
                                          .append("motDePasse",compte.motDePasse);

        return this.httpClient.get<Compte>(`${this.apiUrl}/comptes/find`,{params:queryParams});
    }
    
    createCompte(compte: Compte): Observable<Compte>{
        return this.httpClient.post<Compte>(`${this.apiUrl}/comptes/add`,compte);
    }
    
    updateCompte(compte: Compte): Observable<Compte>{
        return this.httpClient.post<Compte>(`${this.apiUrl}/comptes/${compte.id}`,compte);
    }
    
    deleteCompte(id: number): Observable<Compte>{
        return this.httpClient.delete<Compte>(`${this.apiUrl}/comptes/${id}`);
    }
}