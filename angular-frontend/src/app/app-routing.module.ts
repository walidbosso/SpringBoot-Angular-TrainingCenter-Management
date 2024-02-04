import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { ListEntrepriseComponent } from './Admin/entreprise/list-entreprise/list-entreprise.component';
import { OneEntrepriseComponent } from './Admin/entreprise/one-entreprise/one-entreprise.component';
import { CreateEntrepriseComponent } from './Admin/entreprise/create-entreprise/create-entreprise.component';
import { EditEntrepriseComponent } from './Admin/entreprise/edit-entreprise/edit-entreprise.component';
import { DashboardComponent } from './Admin/formation/dashboard/dashboard.component';
import { OneFormationComponent } from './Admin/formation/one-formation/one-formation.component';
import { EditFormationComponent } from './Admin/formation/edit-formation/edit-formation.component';
import { CreateFormationComponent } from './Admin/formation/create-formation/create-formation.component';
import { ListEntrepriseComponent } from './Admin/entreprise/list-entreprise/list-entreprise.component';

const routes: Routes =[
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  },
  {
    path:'auth', 
    loadChildren: ()=> import("./auth/auth.module").then(m=> m.AuthModule)
  },
  {
    path:'home',
    loadChildren: ()=> import("./home/home.module").then(m=> m.HomeModule)
  },
 

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
