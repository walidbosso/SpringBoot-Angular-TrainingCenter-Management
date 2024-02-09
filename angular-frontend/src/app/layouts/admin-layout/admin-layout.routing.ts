import { Routes } from '@angular/router';
import { DashboardComponent } from '../../Admin/formation/dashboard/dashboard.component';
import { ListEntrepriseComponent } from '../../Admin/entreprise/list-entreprise/list-entreprise.component';
import { TableListFormatorComponent } from '../../Admin/formator/list-formator/list-formator.component';
import { CreateFormatorComponent } from '../../Admin/formator/add-formator/add-formator.component';
import { UpdateFormatorComponent } from '../../Admin/formator/update-formator/update-formator.component';
import { CreateEntrepriseComponent } from 'app/Admin/entreprise/create-entreprise/create-entreprise.component';
import { EditEntrepriseComponent } from 'app/Admin/entreprise/edit-entreprise/edit-entreprise.component';
import { OneEntrepriseComponent } from 'app/Admin/entreprise/one-entreprise/one-entreprise.component';
import { OneFormationComponent } from 'app/Admin/formation/one-formation/one-formation.component';
import { EditFormationComponent } from 'app/Admin/formation/edit-formation/edit-formation.component';
import { CreateFormationComponent } from 'app/Admin/formation/create-formation/create-formation.component';
// import { DateFormationComponent } from 'app/home/date-formation/date-formation.component';
// import { CategoryFormationComponent } from 'app/home/category-formation/category-formation.component';
import { CalendarComponent } from 'app/Admin/calendar/calendar.component';
import { Logout } from '../../Admin/logout/logout.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { NomFormationComponent } from 'app/Admin/formation/nom-formation/nom-formation.component';
import { DemandeComponent } from 'app/Admin/demande/list-demandes/list-demandes.component';
// import { OneDemandeComponent } from 'app/Admin/formation copy/one-demande/one-demande.component';

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
      { path: 'calendar', component: CalendarComponent },
      { path: 'list-formator', component: TableListFormatorComponent },
      { path: 'logout', component: Logout },
      {
        path: 'individu',
        loadChildren: () =>
          import('../../Admin/individu/individu.module').then(
            (m) => m.IndividuModule
          ),
      },

      // DEMANDES
      { path: 'demande', component: DemandeComponent },
      // { path: 'demande:id/details', component: OneDemandeComponent },

      // FORMATION
      { path: 'dashboard', component: DashboardComponent },
      { path: 'formation', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'formation/:id/details', component: OneFormationComponent },
      { path: 'formation/:id/edit', component: EditFormationComponent },
      { path: 'formation/create', component: CreateFormationComponent },
      { path: 'formation/nom/:nom', component: NomFormationComponent },
      // {
      //   path: 'formation/categorie/:categorie',
      //   component: CategoryFormationComponent,
      // },

      //FORMATEUR
      { path: 'formateur', redirectTo: 'formateur/get', pathMatch: 'full' },
      { path: 'formateur/get', component: TableListFormatorComponent },
      { path: 'formateur/add', component: CreateFormatorComponent },
      { path: 'formateur/:id/update', component: UpdateFormatorComponent },

      // ENTREPRISE
      { path: 'entreprise', redirectTo: 'entreprise/get', pathMatch: 'full' },
      { path: 'entreprise/get', component: ListEntrepriseComponent },
      { path: 'entreprise/create', component: CreateEntrepriseComponent },
      { path: 'entreprise/:id/edit', component: EditEntrepriseComponent },
      { path: 'entreprise/:id/details', component: OneEntrepriseComponent },
    ],
  },
];
