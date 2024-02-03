import { Routes } from '@angular/router';

import { DashboardComponent } from '../../Admin/dashboard/dashboard.component';
import { TableListFormatorComponent } from '../../Admin/list-formator/list-formator.component';
import { TableListIndividuComponent } from '../../Admin/list-Idividu/list-Idividu.component';
import { TableListEntrepriseComponent } from '../../Admin/entreprise/list-Entreprise/list-Entreprise.component';
import { CalendarComponent } from '../../Admin/calendar/calendar.component';
import { Logout } from '../../Admin/logout/logout.component';
import { AdminLayoutComponent } from './admin-layout.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'list-formator',
        component: TableListFormatorComponent,
      },
      {
        path: 'table-list',
        component: TableListIndividuComponent,
      },
      {
        path: 'list-Entreprise',
        component: TableListEntrepriseComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'logout',
        component: Logout,
      },
    ],
  },
];
