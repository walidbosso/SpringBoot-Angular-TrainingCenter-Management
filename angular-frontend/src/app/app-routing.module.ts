import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEntrepriseComponent } from './Admin/entreprise/list-entreprise/list-entreprise.component';
import { OneEntrepriseComponent } from './Admin/entreprise/one-entreprise/one-entreprise.component';
import { CreateEntrepriseComponent } from './Admin/entreprise/create-entreprise/create-entreprise.component';
import { EditEntrepriseComponent } from './Admin/entreprise/edit-entreprise/edit-entreprise.component';

const routes: Routes = [
    // {path: '', redirectTo:'entreprise/get', pathMatch:'full'},
    // {path: 'entreprise', redirectTo:'entreprise/get', pathMatch:'full'},
    // {path: 'entreprise/get', component:ListEntrepriseComponent},
    // {path: 'entreprise/:id/details', component:OneEntrepriseComponent},
    // {path: 'entreprise/create', component:CreateEntrepriseComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
