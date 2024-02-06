import { Injectable } from '@angular/core';
import { Individu } from 'app/model/individu.model';
import axios from 'axios';
import { UserAuthsService } from './user-auths.service';

@Injectable({
  providedIn: 'root',
})
export class IndividuService {
  constructor(private userAuthsService: UserAuthsService) {}

  header = {
    'Authorization': 'Bearer ' + this.userAuthsService.getToken(),
    'Content-Type': 'application/json'
  };

  // Get all
  getAllIndividus(): Promise<any> {
    return axios.get('/individu/get', { headers: this.header });
  }
  
  // Get individu by id
  getIndividuById(id: number): Promise<any> {
    return axios.get('/individu/get/' + id, { headers: this.header });
  }

  // Update individu
  updateIndividu(individu: Individu): Promise<any> {
    return axios.put('/individu/update', individu, { headers: this.header });
  }

  // Delete individu by id
  deleteIndividu(id: number): Promise<any> {
    return axios.delete('/individu/delete/' + id, { headers: this.header });
  }
}
