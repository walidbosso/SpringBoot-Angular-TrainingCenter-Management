import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class EntrepriseService {
  constructor() {}
  // GET ALL
  getAllEntreprises(): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };

    return axios.get('/entreprise/get', { headers });
  }

  getEntrepriseById(id: number): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    return axios.get(`/entreprise/get/${id}`);
  }

  // POST ADD
  addEntreprise(request: any): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    let reqData = {
      nom: request.nom,
      address: request.address,
      tel: request.tel,
      url: request.url,
      email: request.email,
    };
    return axios.post(`/entreprise/add`, reqData, { headers });
  }

  // put update
  updateEntreprise(request: any): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    let reqData = {
      id: request.id,
      nom: request.nom,
      address: request.address,
      tel: request.tel,
      url: request.url,
      email: request.email,
    };
    return axios.put(`/entreprise/update`, reqData, { headers });
  }

  // DELETE
  deleteEntreprise(id: number): Promise<any> {
    return axios.delete(`/entreprise/delete/${id}`);
  }
}
