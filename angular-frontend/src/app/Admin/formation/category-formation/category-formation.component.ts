import { Component, OnInit } from '@angular/core';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-formation',
  templateUrl: './category-formation.component.html',
  styleUrls: ['./category-formation.component.css']
})
export class CategoryFormationComponent implements OnInit {
  formations: Formation[] = [];

  constructor(public formationService: FormationService,  private route: ActivatedRoute) {}

  ngOnInit() {
    this.formationService
      .findByCategorie(this.route.snapshot.params['categorie'])
      .then((response) => {
        console.log(response);
        this.formations = response.data;
      })
      .catch((error) => {
        console.log("findByCategorie ERROR category ts "+ error);
        return error;
      });// on load we call the function below
  }



}
