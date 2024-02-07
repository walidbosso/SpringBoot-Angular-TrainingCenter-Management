import { Component, OnInit } from '@angular/core';
import { Formation } from '../../Admin/formation/formation';
import { FormationService } from '../../Admin/formation/formation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-formation',
  templateUrl: './category-formation.component.html',
  styleUrls: ['./category-formation.component.css']
})
export class CategoryFormationComponent implements OnInit {
  formations: Formation[] = [];
  title:string = '';

  constructor(public formationService: FormationService,  private route: ActivatedRoute) {}

  ngOnInit() {
    this.title=this.route.snapshot.params['categorie'];
    this.formationService
      .findByCategorie(this.route.snapshot.params['categorie'])
      .then((response) => {
        console.log(response);
        this.formations = response.data.sort((a, b) => new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime());
      })
      .catch((error) => {
        console.log("findByCategorie ERROR category ts "+ error);
        return error;
      });// on load we call the function below
  }



}
