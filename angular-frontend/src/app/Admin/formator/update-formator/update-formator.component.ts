
import { FormatorService } from '../../../services/formators.service';
import { Formator } from '../model/formator.model'

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-update-formator',
  templateUrl: './update-formator.component.html'
})
export class UpdateFormatorComponent implements OnInit {

  /*id: number;
  formator: Formator;
  submitted = false;*/
  formator: Formator = { id: 0, name: '', email: '' ,competences:''};
  isSubmitting: boolean = false;

  constructor(private route: ActivatedRoute, private formatorService: FormatorService,
    private router: Router) { 
      this.formator = {
        id: this.route.snapshot.params['id'],
        name: '',
        email: '',
        competences: '',
      }
    }

  /*ngOnInit() {
    this.formator = new Formator();
    this.id = this.route.snapshot.params['id'];
    this.formatorService.getFormatorById(this.id)
      .subscribe(data => {
        console.log(data)
        this.formator = data;
      }, error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.formatorService.updateFormator(this.id, this.formator)
    .subscribe(data => console.log(data), error => console.log(error));
    this.formator = new Formator();
    this.router.navigate(['/formateur']);
  }*/

  ngOnInit(): void{
    this.formatorService.getFormateurById(this.route.snapshot.params['id'])
    .then((response)=>{
      //console.log(response);
      //NOW THAT VARIABLE had data in it using id once the page is loaded
      this.formator = response.data;
      //console.log(this.formator);
    })
    .catch(error=>{return error});
  }
//FORM CALLS THIS FUNCTION with data from inputs
updateFormator(){
  console.log(this.formator);
  this.isSubmitting = true;
  this.formatorService.updateFormateur(this.formator)
  .then(response=>{
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
    .catch(error=>{
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

 

  


  
    
  
  


