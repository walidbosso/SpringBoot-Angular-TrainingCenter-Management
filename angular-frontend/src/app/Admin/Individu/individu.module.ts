import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividuRoutingModule } from './individu-routing.module';
import { AllIndividusComponent } from './all-individus/all-individus.component';


@NgModule({
  declarations: [
    AllIndividusComponent
  ],
  imports: [
    CommonModule,
    IndividuRoutingModule
  ]
})
export class IndividuModule { }
