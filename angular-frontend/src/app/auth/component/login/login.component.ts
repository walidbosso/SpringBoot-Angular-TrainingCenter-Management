import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/user.model';
import { UserAuthsService } from 'app/services/user-auths.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Utilisez le modèle User ici
  user: User = {
    username: '',
    password: '',
  };

  constructor(
    private userService: UserService,
    private userAuthsService: UserAuthsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public login() {
    console.log('Inside Login Function');

    this.userService.generateToken(this.user).subscribe(
      (response: any) => {
        console.log('role: ' + response.role);
        console.log('accessToken: ' + response.accessToken);
        this.userAuthsService.setRole(response.role);
        this.userAuthsService.setToken(response.accessToken);
        console.log('getRole: ' + this.userAuthsService.getRole());
        console.log('getToken: ' + this.userAuthsService.getToken());

        // if (response.role === 'ROLE_ADMIN') {
        //   this.router.navigate(['/admin']);
        // } else if (response.role === 'ROLE_ASSISTANT') {
        //   this.router.navigate(['/assistant']);
        // } else if (response.role === 'ROLE_FORMAT') {
        //   this.router.navigate(['/format']);
        // }
      },
      (error) => {
        console.log('In error');
        console.log(error);
      }
    );
  }
}
