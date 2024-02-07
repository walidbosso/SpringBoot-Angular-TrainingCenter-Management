import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/admin/dashboard', title: 'Formations',  icon: 'dashboard', class: '' },
    { path: '/admin/formateur', title: 'List - Formator',  icon:'content_paste', class: '' },
    { path: '/admin/individu', title: 'List - Individu',  icon:'content_paste', class: '' },
    { path: '/admin/entreprise/get', title: 'List - Entreprise',  icon:'list', class: '' },
    { path: '/admin/calendar', title: 'Calendar',  icon:'event', class: '' },
    { path: '/home', title: 'Page Acceuil',  icon:'dashboard', class: '' },
    { path: '/admin/logout', title: 'Logout',  icon:'logout', class: 'active-pro' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
