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
  findByNomLike(nom: string): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    console.log("Service nom dans /nom "+nom,)
    return axios.get(`/formation/nom/${nom}`, { headers });
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

  

  addFormationWithImage(formation: any, imageFile: File): Promise<any> {
    const headers = { 'Content-Type': 'multipart/form-data' };

    // Create FormData and append formation data
    const formData = new FormData();
    formData.append('formation', JSON.stringify(formation));
    // Append image file
    formData.append('imageFile', imageFile);
    console.log("addFormationWithImage service  formdata: "+formData+ imageFile+ JSON.stringify(formation));

    return axios.post('/formation/add', formData, { headers });
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
      imageName:request.imageName,
      imageData:request.imageData,
    };
    return axios.put(`/formation/update`, reqData, { headers });
  }

  // DELETE
  deleteFormation(id: number): Promise<any> {
    return axios.delete(`/formation/delete/${id}`);
  }
}
