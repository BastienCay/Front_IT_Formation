import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SessionUserDTO from '../models/DTO/sessionUserDTO';

@Injectable({
    providedIn: 'root'
  })
export class StagiaireSessionFormationService {

    private apiUrl = "http://localhost:8080";

    constructor(private httpClient: HttpClient) {}

    getFormations(id:number): Observable<SessionUserDTO[]>{
        return this.httpClient.get<SessionUserDTO[]>(`${this.apiUrl}/sessions-user/${id}`);
    }
    
}