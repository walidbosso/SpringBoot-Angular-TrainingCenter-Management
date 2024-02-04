import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormatorService } from 'app/services/formators.service';
import { Formator } from '../model/formator.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-formator',
  templateUrl: './list-formator.component.html'
})
export class TableListFormatorComponent implements OnInit {
  formators: Formator[] = [];

  constructor(private formatorService: FormatorService, private router: Router) { }

  ngOnInit(): void {
    this.loadFormators();
  }

  loadFormators() {
    this.formatorService.getAllFormateurs()
    .then((response)=>{
      console.log(response);
      this.formators=response.data;
    })
    .catch((error)=>{
      return error;
    }); 
  }

  updateFormator(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteFormator(id: number) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'Formateur deleted cannot be recovered',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Go ahead with deletion'
    })
      .then(result => {
        if (result.isConfirmed) {
          this.formatorService.deleteFormateur(id)
            .then(response => {
              Swal.fire({
                icon: 'success',
                title: 'Formateur deleted successfully',
                showConfirmButton: false,
                timer: 1500
              })
              this.loadFormators();
              return response;
            })
            .catch(error => {
              Swal.fire({
                icon: 'error',
                title: 'Some error occured',
                showConfirmButton: false,
                timer: 1500
              })
              return error;
            });
        }
      });
  }
}

