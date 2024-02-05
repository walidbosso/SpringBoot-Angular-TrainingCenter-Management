import { Routes } from '@angular/router';

import { DashboardComponent } from '../../Admin/formation/dashboard/dashboard.component';
import { TableListFormatorComponent } from '../../Admin/list-formator/list-formator.component';
import { ListEntrepriseComponent } from '../../Admin/entreprise/list-entreprise/list-entreprise.component';
import { CreateEntrepriseComponent } from 'app/Admin/entreprise/create-entreprise/create-entreprise.component';
import { EditEntrepriseComponent } from 'app/Admin/entreprise/edit-entreprise/edit-entreprise.component';
import { OneEntrepriseComponent } from 'app/Admin/entreprise/one-entreprise/one-entreprise.component';
import { OneFormationComponent } from 'app/Admin/formation/one-formation/one-formation.component';
import { EditFormationComponent } from 'app/Admin/formation/edit-formation/edit-formation.component';
import { CreateFormationComponent } from 'app/Admin/formation/create-formation/create-formation.component';
import { DateFormationComponent } from 'app/Admin/formation/date-formation/date-formation.component';
import { CategoryFormationComponent } from 'app/Admin/formation/category-formation/category-formation.component';
import { CalendarComponent } from 'app/Admin/calendar/calendar.component';
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
        { path: 'calendar',  component: CalendarComponent },    
        { path: 'list-formator',  component: TableListFormatorComponent },
        { path: 'logout', component: Logout },
        {
            path: 'individu',
            loadChildren: ()=> import("../../Admin/Individu/individu.module").then(m=> m.IndividuModule)
        },
        // {
        //     path: 'formation',
        //     loadChildren: ()=> import("../../Admin/formation/formation.module").then(m=> m.FormationModule)
        // },

        // FORMATION
        { path: 'dashboard',      component: DashboardComponent },
        { path: 'formation', redirectTo:'dashboard', pathMatch:'full'},
        { path: 'formation/:id/details',      component: OneFormationComponent },
        { path: 'formation/:id/edit',      component: EditFormationComponent },
        { path: 'formation/create',      component: CreateFormationComponent },
        { path: 'formation/date/:date',      component: DateFormationComponent },
        { path: 'formation/category/:category',      component: CategoryFormationComponent },


        // ENTREPRISE
        { path: 'entreprise', redirectTo:'entreprise/get', pathMatch:'full'},
        { path: 'entreprise/get', component:ListEntrepriseComponent },
        { path: 'entreprise/create', component:CreateEntrepriseComponent },
        { path: 'entreprise/:id/edit', component:EditEntrepriseComponent},
        { path: 'entreprise/:id/details', component:OneEntrepriseComponent}, 

    ],
  },

  

];
