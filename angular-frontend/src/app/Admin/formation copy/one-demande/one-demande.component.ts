import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemandeService } from '../demande.service';
import { ActivatedRoute } from '@angular/router';
import { Demande } from '../demande';

@Component({
  selector: 'app-one-demande',
  templateUrl: './one-demande.component.html',
  styleUrls: ['./one-demande.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class OneDemandeComponent {
  Demande: Demande = {
    id: 0,
    formateur: null,
    formation: null,
  };
  isSubmitting: boolean = false;

  constructor(
    public DemandeService: DemandeService,
    private route: ActivatedRoute
  ) {
    this.Demande = {
      // It uses this.route.snapshot.params['id'] to retrieve the route
      // 'Demandes/:id/edit'
      id: this.route.snapshot.params['id'],
      formateur: null,
      formation: null,
    };
  }
  ngOnInit(): void {
    this.DemandeService
      .getDemandeById(this.route.snapshot.params['id'])
      .then((response) => {
        //console.log(response);
        //WE FILL VARIABLE WITH Demande EXTRACTED USING ID PROVIDED IN URL
        this.Demande = response.data;
        console.log(this.Demande);
      })
      .catch((error) => {
        return error;
      });
  }

 

}
