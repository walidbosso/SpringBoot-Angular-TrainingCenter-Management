// formation.service.ts

import { Injectable } from '@angular/core';
import { Formator } from 'app/model/formator.model';
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

  //  signup( idFormation:number, formData:any ) {
  //   const individu: Formator = {
  //     id: formData.id,
  //     name: formData.name,
  //     email: formData.email,
  //     password: formData.password,
  //     competences: formData.competences,
  //     remarques: formData.remarques,
  //   }


  //   return axios.post('/demande/add/' + idFormation, individu)
  // }

   getAllFormateurs(): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };

    return axios.get('/formateur/get', { headers });
  }

  getFormateurById(id: number): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    return axios.get('/formateur/get/' +id);
  }

  // POST ADD 
  addFormateur(request: any): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    let reqData = {
      name: request.name,
      email: request.email,
      password: request.password,
      competences: request.competences,
      remarques: request.remarques,

    }
    return axios.post('/formateur/add', reqData, { headers });
  }

  // put update
  updateFormateur(request: any): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    let reqData = {
      id: request.id,
      name: request.name,
      email: request.email,
      password: request.password,
      competences: request.competences,
      remarques: request.remarques,
      roles: "ROLE_FORMATEUR",
    }
    return axios.put('/formateur/update', reqData, { headers });
  }

  // DELETE
  deleteFormateur(id: number): Promise<any> {
    return axios.delete('/formateur/delete/' +id);
  }

}
