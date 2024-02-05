import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css'],
})
export class ListEntrepriseComponent implements OnInit {
  entreprises: Entreprise[] = []; // Interface we created
  constructor(public entrepriseService: EntrepriseService) {}
  ngOnInit(): void {
    this.getAllEntreprises(); // on loand we call the function below
  }
  getAllEntreprises() {
    this.entrepriseService
      .getAllEntreprises()
      .then((response) => {
        console.log(response);
        this.entreprises = response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  deleteEntreprise(id: number) {
    //give user a chance of option, using notification sweetalert
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'Entreprise deleted cannot be recovered',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Go ahead with deletion',
    }).then((result) => {
      if (result.isConfirmed) {
        this.entrepriseService
          .deleteEntreprise(id) //after deletion then
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: 'Entreprise deleted successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            this.getAllEntreprises(); //REFRESHED AFTER DELETION
            return response;
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Some error occured',
              showConfirmButton: false,
              timer: 1500,
            });
            return error;
          });
      }
    });
  }
}
