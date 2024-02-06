import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  msgError: string = '';

  constructor(
    private userService: UserService,
    private userAuthsService: UserAuthsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userAuthsService.clear();
  }

  loginForm = new FormGroup({
    username:new FormControl( '',[Validators.required]),
    password:new FormControl('', [Validators.required])
  });

  get username() {
    return this.loginForm.get('username') as FormControl
  }
  get password() {
    return this.loginForm.get('password') as FormControl
  }

  public login() {
    ({ username: this.user.username, password: this.user.password } = this.loginForm.value);
    this.userService.generateToken(this.user).then(
      (response: any) => {
        this.userAuthsService.setRole(response.data.role);
        this.userAuthsService.setToken(response.data.accessToken);

        if (response.data.role === 'ROLE_ADMIN') {
          this.router.navigate(['/admin/formation']);
        } else if (response.data.role === 'ROLE_ASSISTANT') {
          this.router.navigate(['/assistant']);
        } else if (response.data.role === 'ROLE_FORMAT') {
          this.router.navigate(['/format']);
        }
        this.loginForm.reset();
      })
      .catch((error) => {
        this.msgError = 'Incorrect username or password !!';
        return error;
      });
  }
}
