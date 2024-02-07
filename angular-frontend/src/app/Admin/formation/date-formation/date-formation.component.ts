import { Component, OnInit } from '@angular/core';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-date-formation',
  templateUrl: './date-formation.component.html',
  styleUrls: ['./date-formation.component.css']
})
export class DateFormationComponent implements OnInit {
  formations: Formation[] = [];
  title:string = '';

  constructor(public formationService: FormationService,  private route: ActivatedRoute) {}

  ngOnInit() {
    this.title=this.route.snapshot.params['date'];

    this.formationService
      .findByDebut(this.route.snapshot.params['date'])
      .then((response) => {
        console.log(response);
        this.formations = response.data.sort((a, b) => new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime());
      })
      .catch((error) => {
        console.log("findByDebut ERROR category ts "+ error);
        return error;
      });// on load we call the function below
  }



}
