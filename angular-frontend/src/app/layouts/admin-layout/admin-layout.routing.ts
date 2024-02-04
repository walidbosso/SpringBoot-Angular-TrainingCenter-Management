import { Routes } from '@angular/router';

import { DashboardComponent } from '../../Admin/dashboard/dashboard.component';
import { TableListFormatorComponent } from '../../Admin/formator/list-formator/list-formator.component';
import { CreateFormatorComponent } from '../../Admin/formator/add-formator/add-formator.component';
import { UpdateFormatorComponent } from '../../Admin/formator/update-formator/update-formator.component';

import { TableListIndividuComponent } from '../../Admin/list-Idividu/list-Idividu.component';
import { ListEntrepriseComponent } from 'app/Admin/entreprise/list-Entreprise/list-Entreprise.component';
import { CalendarComponent } from '../../Admin/calendar/calendar.component';
import { Logout } from '../../Admin/logout/logout.component';
import { CreateEntrepriseComponent } from 'app/Admin/entreprise/create-entreprise/create-entreprise.component';
import { EditEntrepriseComponent } from 'app/Admin/entreprise/edit-entreprise/edit-entreprise.component';
import { OneEntrepriseComponent } from 'app/Admin/entreprise/one-entreprise/one-entreprise.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    //Formator
    { path: 'formateur',  redirectTo:'formateur/get', pathMatch:'full' },
    { path: 'formateur/get',  component: TableListFormatorComponent },
    { path: 'formateur/add',  component: CreateFormatorComponent },
    { path: 'formateur/update/:id',  component: UpdateFormatorComponent },
    //Entreprise
    { path: 'entreprise', redirectTo:'entreprise/get', pathMatch:'full'},
    { path: 'entreprise/get', component:ListEntrepriseComponent },
    { path: 'entreprise/create', component:CreateEntrepriseComponent },
    { path: 'entreprise/:id/edit', component:EditEntrepriseComponent},
    { path: 'entreprise/:id/details', component:OneEntrepriseComponent},
    //Individu
    { path: 'table-list',     component: TableListIndividuComponent },
    { path: 'calendar',  component: CalendarComponent },
    { path: 'logout', redirectTo:'dashboard', pathMatch:'full'},
];
