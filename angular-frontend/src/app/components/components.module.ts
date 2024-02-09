import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EvaluationComponent } from './evaluation/evaluation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    EvaluationComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
