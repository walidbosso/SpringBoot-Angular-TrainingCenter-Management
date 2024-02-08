import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';
import { UserAuthsService } from 'app/services/user-auths.service';

@Component({
  selector: 'app-nom-formation',
  templateUrl: './nom-formation.component.html',
  styleUrls: ['./nom-formation.component.css'],
})
export class NomFormationComponent implements OnInit {
  formations: Formation[] = [];
  title: string = '';
  permission: boolean;

  constructor(
    public formationService: FormationService,
    private route: ActivatedRoute,
    private userAuthsService: UserAuthsService
  ) {}

  ngOnInit() {
    this.permission = this.userAuthsService.isAdmin();

    this.title = this.route.snapshot.params['nom'];
    this.formationService
      .findByNomLike(this.route.snapshot.params['nom'])
      .then((response) => {
        console.log(response);
        this.formations = response.data.sort(
          (a, b) =>
            new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime()
        );
        console.log('this.formations ' + this.formations);
      })
      .catch((error) => {
        console.log('findBynom ERROR nom ts ' + error);
        return error;
      }); // on load we call the function below
  }
}
