import { Injectable } from '@angular/core';
import { Formator } from 'app/model/formator.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class DemandeService {
  formatorData: Formator;
  constructor() {}
  // GET ALL
  getAllDemandes(): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };

    return axios.get('/demande/get', { headers });
  }
  countLines(): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };

    return axios.get('/demande/count', { headers });
  }

  getDemandeById(id: number): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    return axios.get(`/demande/get/${id}`, { headers });
  }
  
 
  // ADD DEMANDE, first we add formateur to his DB then we take him and add it to demande db
  async addDemande(request: any): Promise<any> {
    console.log("addDemande service " + request);

    const headers = { 'Content-Type': 'application/json' };

    try {
      // Perform the formateur/add request
      const response = await axios.post(`/formateur/add`, request.formateur, { headers });

      this.formatorData = response.data; 
      console.log("/formateur/add RESPONSE " + this.formatorData.name);

      const reqData = {
        id: Math.random(),
        formateur: this.formatorData,
        formation: request.formation,
      };

      console.log("addDemande service formateur nom " + reqData.formateur.name);

      // Perform the demande/add request
      const demandeResponse = await axios.post(`/demande/add`, reqData, { headers });

      return demandeResponse;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }

 
  // DELETE
  deleteDemande(id: number): Promise<any> {
    console.log("deleteDemande id "+id)
    return axios.delete(`/demande/delete/${id}`);
  }
  accepteDemande(idFormateur: number, idFormation: number): Promise<any> {
    console.log("accepteDemande Service ids ",idFormation, idFormateur)

    return axios.post(`/formateur/add/${idFormateur}/formation/${idFormation}`);
  }

  deleteByFormationId(idFormation: number): Promise<any> {
    return axios.delete(`/demande/delete/formation/${idFormation}`);
  }

}
