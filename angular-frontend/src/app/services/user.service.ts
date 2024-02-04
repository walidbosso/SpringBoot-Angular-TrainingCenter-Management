import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthsService } from './user-auths.service';
import { User } from 'app/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private userAuthsService: UserAuthsService
  ) {}

  private API_BASE_URL = 'http://localhost:8080/';

  requestHeader = new HttpHeaders({
    'NO-AUTH': 'True',
    'Content-Type': 'application/json',
  });
  public generateToken(user: User) {
    return this.httpClient.post(
      this.API_BASE_URL + 'auth/generateToken',
      user,
      { headers: this.requestHeader }
    );
  }
}
