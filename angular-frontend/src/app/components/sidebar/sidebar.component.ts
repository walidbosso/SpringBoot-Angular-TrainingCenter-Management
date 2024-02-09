import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'app/Admin/demande/demande.service';
import { UserAuthsService } from 'app/services/user-auths.service';

declare const $: any;

interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  role: boolean; 
}

export let ROUTES: RouteInfo[] = [];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  countLine: number = 0;

  constructor(private userAuthsService: UserAuthsService, public DemandeService: DemandeService) {}

  ngOnInit() {
    this.DemandeService.countLines()
      .then((response: any) => {
        console.log(response);
        this.countLine = response.data;
        console.log(this.countLine);
        this.menuItems = this.getRoutes(); // Update menuItems with dynamic titles
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getRoutes(): RouteInfo[] {
    return [
      { path: '/admin/dashboard', title: 'Formations', icon: 'dashboard', class: '', role: this.userAuthsService.isAdminOrAssistant() },
      { path: '/admin/formateur', title: 'List - Formator', icon: 'content_paste', class: '', role: this.userAuthsService.isAdminOrAssistant() },
      { path: '/admin/individu', title: 'List - Individu', icon: 'content_paste', class: '', role: this.userAuthsService.isAdminOrAssistant() },
      { path: '/admin/entreprise/get', title: 'List - Entreprise', icon: 'list', class: '', role: this.userAuthsService.isAdminOrAssistant() },
      { path: '/admin/calendar', title: 'Calendar', icon: 'event', class: '', role: this.userAuthsService.isAdminOrAssistant() },
      { path: '/admin/demande', title: 'Demandes Externes (' + this.countLine +')', icon: 'event', class: '', role: this.userAuthsService.isAdminOrAssistant() },
      { path: '/home', title: 'Page Acceuil', icon: 'dashboard', class: '', role: true },
      { path: '/admin/logout', title: 'Logout', icon: 'logout', class: 'active-pro', role: true },
    ];
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
