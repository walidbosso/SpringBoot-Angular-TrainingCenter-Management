import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllIndividusComponent } from './all-individus/all-individus.component';

const routes: Routes = [
  {
    path: 'individu', redirectTo: 'individu/get', pathMatch: 'full'
  },
  {
    path: 'get',
    component: AllIndividusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividuRoutingModule {}
