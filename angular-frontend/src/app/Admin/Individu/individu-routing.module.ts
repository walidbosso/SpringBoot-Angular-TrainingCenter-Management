import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllIndividusComponent } from './all-individus/all-individus.component';
import { EditIndividuComponent } from './edit-individu/edit-individu.component';

const routes: Routes = [
  { path: 'individu', redirectTo: 'individu/get', pathMatch: 'full' },
  { path: 'get', component: AllIndividusComponent },
  { path: ':id/update', component: EditIndividuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividuRoutingModule {}
