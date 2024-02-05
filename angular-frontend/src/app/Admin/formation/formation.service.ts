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
      formateur: request.formateur,
      entreprise: request.entreprise,
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
