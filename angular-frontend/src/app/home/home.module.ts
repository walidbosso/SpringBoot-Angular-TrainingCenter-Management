import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardHomeComponent } from './card-home/card-home.component';
import { InscrireIndividuComponent } from './inscrire-individu/inscrire-individu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscrireFormateurComponent } from './inscrire-formateur/inscrire-formateur.component';


@NgModule({
  declarations: [
    CardHomeComponent,
    InscrireIndividuComponent,
    InscrireFormateurComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
