import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthsService } from 'app/services/user-auths.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  msgError: string = '';

  constructor(
    private userService: UserService,
    private userAuthsService: UserAuthsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userAuthsService.clear();
    this.loginForm.reset();
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
    this.userService.generateToken(this.loginForm.value).then(
      (response: any) => {
        this.userAuthsService.setRole(response.data.role);
        this.userAuthsService.setToken(response.data.accessToken);

        if (response.data.role === 'ROLE_ADMIN') {
          this.router.navigate(['/admin/formation']);
        } else if (response.data.role === 'ROLE_ASSISTANT') {
          this.router.navigate(['/admin/formation']);
        } else if (response.data.role === 'ROLE_FORMATEUR') {
          this.router.navigate(['/formateur']);
        }
      })
      .catch((error) => {
        this.msgError = 'Incorrect username or password !!';
        return error;
      });
  }
}
