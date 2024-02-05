import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Formation } from '../formation';
import Swal from 'sweetalert2';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  formations: Formation[] = [];

  constructor(public formationService: FormationService) {}

  ngOnInit() {
    this.getAllFormations(); // on loand we call the function below
  }

  getAllFormations() {
    this.formationService
      .getAllFormations()
      .then((response) => {
        console.log(response);
        this.formations = response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  deleteFormation(id: number) {
    //give user a chance of option, using notification sweetalert
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'Formation deleted cannot be recovered',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Go ahead with deletion',
    }).then((result) => {
      if (result.isConfirmed) {
        this.formationService
          .deleteFormation(id) //after deletion then
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: 'Formation deleted successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            this.getAllFormations(); //REFRESHED AFTER DELETION
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
