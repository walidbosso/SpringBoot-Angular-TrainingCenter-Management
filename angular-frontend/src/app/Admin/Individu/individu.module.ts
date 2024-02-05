import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividuRoutingModule } from './individu-routing.module';
import { AllIndividusComponent } from './all-individus/all-individus.component';
import { EditIndividuComponent } from './edit-individu/edit-individu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllIndividusComponent,
    EditIndividuComponent
  ],
  imports: [
    CommonModule,
    IndividuRoutingModule,
    FormsModule
  ]
})
export class IndividuModule { }
