import { Injectable } from '@angular/core';
import { Individu } from 'app/model/individu.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class IndividuService {
  constructor() {}

  // Get all
  getAllIndividus(): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    return axios.get('/individu/get', { headers });
  }
  
  // Get individu by id
  getIndividuById(id: number): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    return axios.get(`/individu/get/${id}`);
  }

  // Update individu
  updateIndividu(individu: Individu): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    return axios.put('/individu/update', individu, { headers });
  }

  // Delete individu by id
  deleteIndividu(id: number): Promise<any> {
    return axios.delete('/individu/delete/' + id);
  }
}
