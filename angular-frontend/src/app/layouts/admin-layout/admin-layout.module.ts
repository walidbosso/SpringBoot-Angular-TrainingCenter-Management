import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../Admin/dashboard/dashboard.component';
import { TableListFormatorComponent } from '../../Admin/formator/list-formator/list-formator.component';
import { CreateFormatorComponent } from '../../Admin/formator/add-formator/add-formator.component';
import { UpdateFormatorComponent } from 'app/Admin/formator/update-formator/update-formator.component';

import { TableListIndividuComponent } from '../../Admin/list-Idividu/list-Idividu.component';
import { ListEntrepriseComponent } from '../../Admin/entreprise/list-Entreprise/list-Entreprise.component';
import { CalendarComponent } from '../../Admin/calendar/calendar.component';
import { Logout } from '../../Admin/logout/logout.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    TableListFormatorComponent,
    CreateFormatorComponent,
    UpdateFormatorComponent,
    TableListIndividuComponent,
    ListEntrepriseComponent,
    CalendarComponent,
    Logout,
    
  ]
})

export class AdminLayoutModule {}
