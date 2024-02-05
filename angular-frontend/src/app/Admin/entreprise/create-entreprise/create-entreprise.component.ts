import { Component } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-entreprise',
  templateUrl: './create-entreprise.component.html',
  styleUrls: ['./create-entreprise.component.css'],
})
export class CreateEntrepriseComponent {
  nom: string = '';
  address: string = '';
  tel: string = '';
  url: string = '';
  email: string = '';
  isSubmitting: boolean = false; //track button clicked or no, when user clicking multiple times
  constructor(public entrepriseService: EntrepriseService) {}

  // ngOnInit(): void { //you gotta get rid of ngModel to use it
  //   this.myForm = this.formBuilder.group({ //FormGroup=formBuilder.group
  //     nom: ['', Validators.required], // name required
  //     email: ['', [Validators.required, Validators.email]] // email required, w syntaxe  (email) shih built-in ghi staemlom
  //   })
  // }
  addEntreprise() {
    this.isSubmitting = true;
    this.entrepriseService
      .addEntreprise({
        nom: this.nom,
        address: this.address,
        tel: this.tel,
        url: this.url,
        email: this.email,
      })
      .then((response) => {
        console.log(response);
        this.isSubmitting = false;
        Swal.fire({
          icon: 'success',
          title: 'Entreprise created successfully',
          showConfirmButton: false,
          timer: 1500,
        });

        this.nom = '';
        this.address = '';
        this.tel = '';
        this.url = '';
        this.email = '';

        return response;
      }) //response
      .catch((error) => {
        console.log(error);
        this.isSubmitting = false;
        Swal.fire({
          icon: 'error',
          title: 'Some error occured',
          showConfirmButton: false,
          timer: 1500,
        });
        return error;
      });
  }
}
