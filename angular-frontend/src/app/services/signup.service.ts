
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor() { }

  // ADD 
  addFormateur(request: any): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    let reqData = {
      name: request.name,
      email: request.email,
      password: request.password,
      competences: request.competences,
      remarques: request.remarques,

    }
    console.log(reqData);
    return axios.post('/formateur/add', reqData, { headers });
  }
  

}
