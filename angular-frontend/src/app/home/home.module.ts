import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardHomeComponent } from './card-home/card-home.component';
import { InscrireIndividuComponent } from './inscrire-individu/inscrire-individu.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardHomeComponent,
    InscrireIndividuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
