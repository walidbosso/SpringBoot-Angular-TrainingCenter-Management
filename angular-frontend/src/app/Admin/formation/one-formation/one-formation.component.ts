import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-formation',
  templateUrl: './one-formation.component.html',
  styleUrls: ['./one-formation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class OneFormationComponent {
  formation: Formation = {
    id: 0,
    nom: '',
    categorie: '',
    objectif: '',
    description: '',
    duree: '',
    cout: 0,
    dateDebut: null,
    dateFin: null,
    formateur: null,
    entreprise: null,
  };
  isSubmitting: boolean = false;

  constructor(
    public formationService: FormationService,
    private route: ActivatedRoute
  ) {
    this.formation = {
      // It uses this.route.snapshot.params['id'] to retrieve the route
      // 'formations/:id/edit'
      id: this.route.snapshot.params['id'],
      nom: '',
      categorie: '',
      objectif: '',
      description: '',
      duree: '',
      cout: 0,
      dateDebut: null,
      dateFin: null,
      formateur: null,
      entreprise: null,
    };
  }
  ngOnInit(): void {
    this.formationService
      .getFormationById(this.route.snapshot.params['id'])
      .then((response) => {
        //console.log(response);
        //WE FILL VARIABLE WITH formation EXTRACTED USING ID PROVIDED IN URL
        this.formation = response.data;
        console.log(this.formation);
      })
      .catch((error) => {
        return error;
      });
  }

  handleImageError() {
    // Handle image loading error
    console.log('Error loading image');
    // Optionally, you can set a default image or take other actions
  }

  handleImageLoad() {
    // Handle successful image loading
    console.log('Image loaded successfully');
  }

}
