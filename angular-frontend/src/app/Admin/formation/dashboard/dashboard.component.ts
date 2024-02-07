import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Formation } from '../formation';
import Swal from 'sweetalert2';
import { FormationService } from '../formation.service';
import { UserAuthsService } from 'app/services/user-auths.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  formations: Formation[] = [];
  permission: boolean;

  constructor(
    public formationService: FormationService,
    private userAuthsService: UserAuthsService
  ) {}

  ngOnInit() {
    this.getAllFormations(); // on loand we call the function below
    this.permission = this.userAuthsService.isAdmin();
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

  getImageUrl(imageData: any): any {
    return imageData ? `data:image/png;base64,${imageData}` : '';
  }
  fetchImageForFormation(formation: any): void {
    this.formationService.getFormationById(formation.id).then((response) => {
      // Assuming the image data is in response.data.image_data
      formation.image_data = response.data.image_data;
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
