import { Routes } from '@angular/router';

import { DashboardComponent } from '../../Admin/dashboard/dashboard.component';
import { TableListFormatorComponent } from '../../Admin/list-formator/list-formator.component';
import { TableListIndividuComponent } from '../../Admin/list-Idividu/list-Idividu.component';
import { ListEntrepriseComponent } from '../../Admin/entreprise/list-Entreprise/list-Entreprise.component';
import { CreateEntrepriseComponent } from 'app/Admin/entreprise/create-entreprise/create-entreprise.component';
import { EditEntrepriseComponent } from 'app/Admin/entreprise/edit-entreprise/edit-entreprise.component';
import { OneEntrepriseComponent } from 'app/Admin/entreprise/one-entreprise/one-entreprise.component';
import { CalendarComponent } from '../../Admin/calendar/calendar.component';
import { Logout } from '../../Admin/logout/logout.component';
import { AdminLayoutComponent } from './admin-layout.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full',
      },
      {
        path: 'dashboard', component: DashboardComponent,
      },
      {
        path: 'list-formator', component: TableListFormatorComponent,
      },
      {
        path: 'table-list', component: TableListIndividuComponent,
      },
      {
        path: 'entreprise', redirectTo: 'entreprise/get', pathMatch: 'full'
      },
      {
        path: 'entreprise/get', component: ListEntrepriseComponent
      },
      {
        path: 'entreprise/create', component: CreateEntrepriseComponent
      },
      {
        path: 'entreprise/:id/edit', component: EditEntrepriseComponent
      },
      {
        path: 'entreprise/:id/details', component: OneEntrepriseComponent
      },
      {
        path: 'calendar', component: CalendarComponent,
      },
      {
        path: 'logout', component: Logout,
      },
    ],
  },
];
