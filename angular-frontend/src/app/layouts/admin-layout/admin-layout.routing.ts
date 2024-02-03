import { Routes } from '@angular/router';

import { DashboardComponent } from '../../Admin/dashboard/dashboard.component';
import { TableListFormatorComponent } from '../../Admin/list-formator/list-formator.component';
import { TableListIndividuComponent } from '../../Admin/list-Idividu/list-Idividu.component';
import { ListEntrepriseComponent } from '../../Admin/entreprise/list-entreprise/list-entreprise.component';
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
    { path: 'list-formator',  component: TableListFormatorComponent },
    { path: 'table-list',     component: TableListIndividuComponent },
    {path: 'entreprise', redirectTo:'entreprise/get', pathMatch:'full'},
    { path: 'entreprise/get', component:ListEntrepriseComponent },
    { path: 'entreprise/create', component:CreateEntrepriseComponent },
    {path: 'entreprise/:id/edit', component:EditEntrepriseComponent},
    {path: 'entreprise/:id/details', component:OneEntrepriseComponent},
    { path: 'calendar',  component: CalendarComponent },
    { path: 'logout', component: Logout },
];
