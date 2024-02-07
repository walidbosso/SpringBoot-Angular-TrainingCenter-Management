import { Injectable } from '@angular/core';
import { User } from 'app/model/user.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private header = {
    'NO-AUTH': 'True',
    'Content-Type': 'application/json',
  };

  public generateToken(formData: any): Promise<any> {
    const user: User = {
      username: formData.username,
      password: formData.password
    }

    return axios.post('/auth/generateToken', user, { headers: this.header });
  }
}
