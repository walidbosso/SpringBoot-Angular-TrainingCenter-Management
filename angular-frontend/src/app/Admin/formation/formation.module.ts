import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { CategoryFormationComponent } from './category-formation/category-formation.component';
import { DateFormationComponent } from './date-formation/date-formation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateFormationComponent } from './create-formation/create-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OneFormationComponent } from './one-formation/one-formation.component';

@NgModule({
  declarations: [
    CategoryFormationComponent,
    DateFormationComponent,
    CategoryFormationComponent,
    DateFormationComponent,
    CreateFormationComponent,
    EditFormationComponent,
    // DashboardComponent,
    OneFormationComponent,
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    //take data and submit it in form
    FormsModule,
    //works together with
    ReactiveFormsModule,
  ],
})
export class FormationModule {}
