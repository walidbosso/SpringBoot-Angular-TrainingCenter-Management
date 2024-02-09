import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { OneDemandeComponent } from './one-Demande/one-Demande.component';
// import { EditDemandeComponent } from './edit-Demande/edit-Demande.component';
// import { CreateDemandeComponent } from './create-Demande/create-Demande.component';

const routes: Routes = [
  // Demande
  //  { path: 'dashboard',      component: DashboardComponent },
  //  { path: 'Demande', redirectTo:'dashboard', pathMatch:'full'},
  //  { path: 'Demande/:id/details',      component: OneDemandeComponent },
  //  { path: 'Demande/:id/edit',      component: EditDemandeComponent },
  //  { path: 'Demande/create',      component: CreateDemandeComponent },
  // { path: 'Demande',      component: DateDemandeComponent },
  // { path: 'Demande',      component: CategoryDemandeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeRoutingModule {}
