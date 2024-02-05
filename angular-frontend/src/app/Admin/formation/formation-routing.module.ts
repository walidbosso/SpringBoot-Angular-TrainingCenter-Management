import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { OneFormationComponent } from './one-formation/one-formation.component';
// import { EditFormationComponent } from './edit-formation/edit-formation.component';
// import { CreateFormationComponent } from './create-formation/create-formation.component';

const routes: Routes = [
  // FORMATION
  //  { path: 'dashboard',      component: DashboardComponent },
  //  { path: 'formation', redirectTo:'dashboard', pathMatch:'full'},
  //  { path: 'formation/:id/details',      component: OneFormationComponent },
  //  { path: 'formation/:id/edit',      component: EditFormationComponent },
  //  { path: 'formation/create',      component: CreateFormationComponent },
  // { path: 'formation',      component: DateFormationComponent },
  // { path: 'formation',      component: CategoryFormationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationRoutingModule {}
