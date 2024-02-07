import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CardHomeComponent } from './card-home/card-home.component';

import { CategoryFormationComponent } from './category-formation/category-formation.component';
import { DateFormationComponent } from 'app/Admin/formation/date-formation/date-formation.component';

import { InscrireIndividuComponent } from './inscrire-individu/inscrire-individu.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {path:'', component:CardHomeComponent},

      {
        path: 'formation/categorie/:categorie',
        component: CategoryFormationComponent,
      }, 
      {
        path: 'formation/date/:date',
        component: DateFormationComponent,
      },

      { path: 'individu/add/:id/formation', component:InscrireIndividuComponent }

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
