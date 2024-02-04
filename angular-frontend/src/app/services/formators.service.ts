// formation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formator } from 'app/Admin/formator/model/formator.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FormatorService {
  constructor() { }
  //private apiUrl = 'http://localhost:8080/';

  /* constructor(private http: HttpClient) {}
 
   getFormators(): Observable<any[]> {
     return this.http.get<any[]>(`${this.apiUrl}/formateur/get`);
   }
 
   getFormatorById(id: number): Observable<any> {
     return this.http.get<any>(`${this.apiUrl}/formateur/get/${id}`);
   }
 
   addFormator(formator: Formator): Observable<any> {
     return this.http.post<any>(`${this.apiUrl}/formateur/add`, formator);
   }
 
   updateFormator(id: number, formator: Formator): Observable<any> {
     return this.http.put<any>(`${this.apiUrl}/formateur/update/${id}`, formator);
   }
 
   deleteFormator(id: number): Observable<any> {
     return this.http.delete<any>(`${this.apiUrl}/formateur/delete/${id}`);
   }*/

   getAllFormateurs(): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };

    return axios.get('/formateur/get', { headers });
  }

  getFormateurById(id: number): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    return axios.get(`/formateur/get/${id}`);
  }

  // POST ADD 
  addFormateur(request: any): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    let reqData = {
      nom: request.nom,
      email: request.email,
      competances: request.competances,

    }
    return axios.post(`/formateur/add`, reqData, { headers });
  }

  // put update
  updateFormateur(request: any): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    let reqData = {
      id: request.id,
      nom: request.nom,
      email: request.email,
      competances: request.competances,
    }
    return axios.put(`/formateur/update`, reqData, { headers });
  }

  // DELETE
  deleteFormateur(id: number): Promise<any> {
    return axios.delete(`/formateur/delete/${id}`);
  }

}
