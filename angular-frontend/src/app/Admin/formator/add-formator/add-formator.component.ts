
import { FormatorService } from '../../../services/formators.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-formator',
  templateUrl: './add-formator.component.html'
})
export class CreateFormatorComponent{

  name: string = '';
  email: string = '';
  password: string = '';
  competences: string = '';
  remarques: string = '';
  isSubmitting: boolean = false;

  constructor(private formatorService: FormatorService,
    private router: Router) {

  }

  addFormator() {
    this.isSubmitting = true;
    this.formatorService.addFormateur({ name: this.name, email: this.email, password: this.password, competences: this.competences, remarques: this.remarques })
      .then(response => {
        console.log(response);
        this.isSubmitting = false;
        Swal.fire({
          icon: 'success',
          title: 'formateur created successfully',
          showConfirmButton: false,
          timer: 1500
        })

        this.name = '';
        this.email = '';
        this.password = '';
        this.competences = '';
        this.remarques = '';

        return response;
      })//response
      .catch(error => {
        console.log(error);
        this.isSubmitting = false;
        Swal.fire({
          icon: 'error',
          title: 'Some error occured',
          showConfirmButton: false,
          timer: 1500
        })
        return error;
      })
  }


}












