
import { FormatorService } from '../../../services/formators.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-formator',
  templateUrl: './add-formator.component.html'
})
export class CreateFormatorComponent{
  /*formator: Formator = new Formator();
  submitted = false;*/
  name: string = '';
  email: string = '';
  competences: string = '';
  isSubmitting: boolean = false;

  constructor(private formatorService: FormatorService,
    private router: Router) {

  }

  /*ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    this.formatorService.addFormator(this.formator)
    .subscribe(response=>{
        console.log(response); 
        this.submitted=false;
        Swal.fire({
          icon:'success',
          title:'entreprise created successfully',
          showConfirmButton:false,
          timer:1500
        })

        this.formator.name='';
        this.formator.email='';
        this.formator.competences='';
        return response;
      }),
      (error=>{
        console.log(error);
        this.submitted=false;
        Swal.fire({
          icon:'error',
          title:'Some error occured',
          showConfirmButton:false,
          timer:1500
        })
        return error;
      })
    this.formator = new Formator();
    this.router.navigate(['/formateur/get']);
  }*/

  addFormator() {
    this.isSubmitting = true;
    this.formatorService.addFormateur({ name: this.name, email: this.email, competences: this.competences })
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
        this.competences = '';

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












