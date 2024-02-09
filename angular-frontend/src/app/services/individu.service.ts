import { Injectable } from '@angular/core';
import { Individu } from 'app/model/individu.model';
import axios from 'axios';
import { UserAuthsService } from './user-auths.service';
import { Evaluation } from 'app/model/evaluation.model';

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

  // Add Individu to formation
  signup( id:number, formData:any ): Promise<any> {
    const individu: Individu = {
      id: 0,
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      tele: formData.tele,
      ville: formData.ville,
      code: '',
      dateNaissance: formData.dateNaissance
    }

    return axios.post('/individu/add/formation/' + id, individu)
  }

  evaluate(id: number, formData: any): Promise<any> {
    const evaluation: Evaluation = {
      id: 0,
      code: formData.code,
      quality: formData.quality,
      pace: formData.pace,
      course: formData.course,
      tp: formData.tp,
      mastery: formData.mastery
    }

    return axios.post('/evaluation/add/formation/' + id, evaluation)
  }
}
