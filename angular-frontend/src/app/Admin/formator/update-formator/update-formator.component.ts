
import { FormatorService } from '../../../services/formators.service';
import { Formator } from '../../../model/formator.model'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-update-formator',
  templateUrl: './update-formator.component.html'
})
export class UpdateFormatorComponent implements OnInit {

  formator: Formator = { id: 0, name: '', email: '', password: '', competences: '', remarques: '' };
  isSubmitting: boolean = false;

  constructor(private formatorService: FormatorService, private route: ActivatedRoute) {
    this.formator = {
      id: this.route.snapshot.params['id'],
      name: '',
      email: '',
      password: '',
      competences: '',
      remarques: '',
    }
  }

  ngOnInit(): void {
    this.formatorService.getFormateurById(this.route.snapshot.params['id'])
      .then((response) => {
        //console.log(response);
        //NOW THAT VARIABLE had data in it using id once the page is loaded
        this.formator = response.data;
      })
      .catch(error => { return error });
  }
  //FORM CALLS THIS FUNCTION with data from inputs
  updateFormator() {
    console.log(this.formator);
    this.isSubmitting = true;
    this.formatorService.updateFormateur(this.formator)
      .then(response => {
        console.log(response);
        this.isSubmitting = false;
        Swal.fire({
          icon: 'success',
          title: 'Formateur updated successfully',
          showConfirmButton: false,
          timer: 1500
        })
        return response.data;
      })
      .catch(error => {
        console.log(error);
        this.isSubmitting = false;
        Swal.fire({
          icon: 'error',
          title: 'Some error occurred',
          showConfirmButton: false,
          timer: 1500
        })
        return error;
      });
  }



}












