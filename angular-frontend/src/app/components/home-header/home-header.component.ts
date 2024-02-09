import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'app/services/scripts.service';
import { UserAuthsService } from 'app/services/user-auths.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  permission: Boolean = this.userAuthsService.isLoggedIn();

  constructor(
    private userAuthsService: UserAuthsService,
  ) {}

  ngOnInit(): void {
    this.permission = this.userAuthsService.isLoggedIn();
  }
 
}
