import { Injectable } from '@angular/core';
import { User } from 'app/model/user.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private requestHeader = {
    'NO-AUTH': 'True',
    'Content-Type': 'application/json',
  };

  public generateToken(user: User): Promise<any> {
    return axios.post(
      '/auth/generateToken',
      user,
      { headers: this.requestHeader }
    );
  }
}
