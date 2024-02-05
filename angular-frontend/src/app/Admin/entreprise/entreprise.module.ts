import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRoutingModule } from './entreprise-routing.module';
// import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';
import { CreateEntrepriseComponent } from './create-entreprise/create-entreprise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OneEntrepriseComponent } from './one-entreprise/one-entreprise.component';
import { EditEntrepriseComponent } from './edit-entreprise/edit-entreprise.component';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';

@NgModule({
  declarations: [
    //COMPONENTS
    // ListEntrepriseComponent,
    CreateEntrepriseComponent,
    OneEntrepriseComponent,
    EditEntrepriseComponent,
  ],
  imports: [
    //MODULES
    CommonModule,
    EntrepriseRoutingModule,
    //take data and submit it in form
    FormsModule,
    //works together with
    ReactiveFormsModule,
  ],
})
export class EntrepriseModule {}
