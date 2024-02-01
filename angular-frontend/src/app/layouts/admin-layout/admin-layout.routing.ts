import { Routes } from '@angular/router';

import { DashboardComponent } from '../../Admin/dashboard/dashboard.component';
import { TableListFormatorComponent } from '../../Admin/list-formator/list-formator.component';
import { TableListIndividuComponent } from '../../Admin/list-Idividu/list-Idividu.component';
import { TableListEntrepriseComponent } from '../../Admin/list-Entreprise/list-Entreprise.component';
import { CalendarComponent } from '../../Admin/calendar/calendar.component';
import { Logout } from '../../Admin/logout/logout.component';

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
    { path: 'list-Entreprise', component: TableListEntrepriseComponent },
    { path: 'calendar',  component: CalendarComponent },
    { path: 'logout', component: Logout },
];
