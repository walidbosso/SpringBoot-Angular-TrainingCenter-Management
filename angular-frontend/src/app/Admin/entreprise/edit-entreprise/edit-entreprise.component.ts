import { Component } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-entreprise',
  templateUrl: './edit-entreprise.component.html',
  styleUrls: ['./edit-entreprise.component.css'],
})
export class EditEntrepriseComponent {
  entreprise: Entreprise = {
    id: 0,
    nom: '',
    address: '',
    tel: '',
    url: '',
    email: '',
  };
  isSubmitting: boolean = false;

  constructor(
    public entrepriseService: EntrepriseService,
    private route: ActivatedRoute
  ) {
    this.entreprise = {
      // It uses this.route.snapshot.params['id'] to retrieve the route
      // 'entreprises/:id/edit'
      id: this.route.snapshot.params['id'],
      nom: '',
      address: '',
      tel: '',
      url: '',
      email: '',
    };
  }
  ngOnInit(): void {
    this.entrepriseService
      .getEntrepriseById(this.route.snapshot.params['id'])
      .then((response) => {
        //console.log(response);
        //NOW THAT VARIABLE had data in it using id once the page is loaded
        this.entreprise = response.data;
        //console.log(this.entreprise);
      })
      .catch((error) => {
        return error;
      });
  }
  //FORM CALLS THIS FUNCTION with data from inputs
  editentreprise() {
    console.log(this.entreprise);
    this.isSubmitting = true;
    //we already updated it with ngModel entreprise.title etc in html
    this.entrepriseService
      .updateEntreprise(this.entreprise)
      .then((response) => {
        console.log(response);
        this.isSubmitting = false;
        Swal.fire({
          icon: 'success',
          title: 'Entreprise updated successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        this.isSubmitting = false;
        Swal.fire({
          icon: 'error',
          title: 'Some error occurred',
          showConfirmButton: false,
          timer: 1500,
        });
        return error;
      });
  }
}
