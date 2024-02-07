import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  constructor() {}
  // GET ALL
  getAllFormations(): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };

    return axios.get('/formation/get', { headers });
  }

  getFormationById(id: number): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    return axios.get(`/formation/get/${id}`, { headers });
  }
  
  findByCategorie(categorie: string): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    console.log("Service categorie dans /categorie "+categorie)
    return axios.get(`/formation/categorie/${categorie}`, { headers });
  }

  findByDebut(date: string): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    console.log("Service date dans /date "+date)
    return axios.get(`/formation/date/${date}`, { headers });
  }

  // POST ADD
  addFormation(request: any): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    let reqData = {
      nom: request.nom,
      categorie: request.categorie,
      objectif: request.objectif,
      description: request.description,
      duree: request.duree,
      cout: request.cout,
      dateDebut: request.dateDebut,
      dateFin: request.dateFin,
      formateur: request.formateur || null,
      entreprise: request.entreprise || null,
    };
    return axios.post(`/formation/add`, reqData, { headers });
  }

  // put update
  updateFormation(request: any): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    let reqData = {
      id: request.id,
      nom: request.nom,
      categorie: request.categorie,
      objectif: request.objectif,
      description: request.description,
      duree: request.duree,
      cout: request.cout,
      dateDebut: request.dateDebut,
      dateFin: request.dateFin,
      formateur: request.formateur,
      entreprise: request.entreprise,
    };
    return axios.put(`/formation/update`, reqData, { headers });
  }

  // DELETE
  deleteFormation(id: number): Promise<any> {
    return axios.delete(`/formation/delete/${id}`);
  }
}
