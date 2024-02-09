import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthsService {

  constructor() { }

  public setRole(rele: string) {
    localStorage.setItem("role", rele)
  }
  public getRole() {
    return localStorage.getItem("role");
  }
  public setToken(jwtToken: string) {
    localStorage.setItem("token", jwtToken)
  }
  public getToken(): string {
    return "" + localStorage.getItem("token")
  }
  public clear() {
    localStorage.clear();
  }
  public isAdmin(): boolean {
    return this.getRole() === "ROLE_ADMIN";
  }
  public isAdminOrAssistant(): boolean {
    return this.getRole() === "ROLE_ADMIN" || this.getRole() === "ROLE_ASSISTANT";
  }
  public isLoggedIn(): boolean {
    return this.getRole() !== null && this.getToken() !== null;
  }
  // public roleMatch(allowedRoles: string[]): boolean {
  //   const userRole = this.getRole();

  //   if (userRole !== null) {

  //     // Check if the userRole is equal to any of the allowed roles
  //     return allowedRoles.includes(userRole.trim());
  //   }

  //   return false;
  // }
  
}
