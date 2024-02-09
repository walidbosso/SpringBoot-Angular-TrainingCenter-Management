import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeRoutingModule } from './demande-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemandeComponent } from './list-demandes/list-demandes.component';

@NgModule({
  declarations: [

    DemandeComponent,
  ],
  imports: [
    CommonModule,
    DemandeRoutingModule,
    //take data and submit it in form
    FormsModule,
    //works together with
    ReactiveFormsModule,
  ],
})
export class DemandeModule {}
