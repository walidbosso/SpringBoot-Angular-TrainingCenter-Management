import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthsService } from 'app/services/user-auths.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class Logout implements OnInit {

  constructor(
    private userAuthsService: UserAuthsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userAuthsService.clear();
    this.router.navigate(['home']);
  }

}


