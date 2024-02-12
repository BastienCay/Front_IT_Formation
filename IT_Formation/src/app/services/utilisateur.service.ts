import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({
    providedIn: 'root'
  })
export class UtilisateurService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getUtilisateurs(): Observable<Utilisateur[]>{
        return this.httpClient.get<Utilisateur[]>(`${this.apiUrl}/utilisateurs/all`);
    }
    
    getUtilisateur(id:number): Observable<Utilisateur>{
        return this.httpClient.get<Utilisateur>(`${this.apiUrl}/utilisateurs/${id}`);
    }
    
    createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
        return this.httpClient.post<Utilisateur>(`${this.apiUrl}/utilisateurs/add`,utilisateur);
    }
    
    updateUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
        return this.httpClient.post<Utilisateur>(`${this.apiUrl}/utilisateurs/${utilisateur.idUser}`,utilisateur);
    }
    
    deleteUtilisateur(id: number): Observable<Utilisateur>{
        return this.httpClient.delete<Utilisateur>(`${this.apiUrl}/utilisateurs/${id}`);
    }
}