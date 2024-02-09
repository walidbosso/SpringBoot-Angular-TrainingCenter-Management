import { Component, OnInit } from '@angular/core';
import { Formation } from 'app/Admin/formation/formation';
import { FormationService } from 'app/Admin/formation/formation.service';
import { UserAuthsService } from 'app/services/user-auths.service';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {
  formations: Formation[] = [];

  constructor(public formationService: FormationService, private userAuthsService: UserAuthsService) {}

  ngOnInit() {
    this.getAllFormations(); // on loand we call the function below
  }

  getAllFormations() {
    this.formationService
      .getAllFormations()
      .then((response) => {
        console.log(response);
        this.formations = response.data.sort((a, b) => new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime());
        // console.log(this.formations[0].formateur.name);
      })
      .catch((error) => {
        return error;
      });
  }

  

}
