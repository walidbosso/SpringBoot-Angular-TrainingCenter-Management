import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import Swal from 'sweetalert2';
import { DemandeService } from '../demande.service';
import { UserAuthsService } from 'app/services/user-auths.service';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.css'],
})
export class DemandeComponent implements OnInit {
  Demandes: Demande[] = [];
  permission: boolean;

  constructor(
    public DemandeService: DemandeService,
    private userAuthsService: UserAuthsService
  ) {}

  ngOnInit() {
    this.getAllDemandes(); // on load we call the function below
    this.permission = this.userAuthsService.isAdmin();
  }

  getAllDemandes() {
    this.DemandeService.getAllDemandes()
      .then((response) => {
        console.log(response);
        this.Demandes = response.data.sort(
          (a, b) =>
            new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime()
        );
      })
      .catch((error) => {
        return error;
      });
  }

  getImageUrl(imageData: any): any {
    return imageData ? `data:image/png;base64,${imageData}` : '';
  }
  fetchImageForDemande(Demande: any): void {
    this.DemandeService.getDemandeById(Demande.id).then((response) => {
      Demande.image_data = response.data.image_data;
    });
  }

  deleteDemande(id: number) {
    console.log(id);
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'Demande deleted cannot be recovered',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Go ahead with deletion',
    }).then((result) => {
      if (result.isConfirmed) {
        this.DemandeService.deleteDemande(id) //after deletion then
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: 'Demande deleted successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            this.getAllDemandes(); //REFRESHED AFTER DELETION
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
  accepteDemande(idFormateur: number, idFormation: number) {
    Swal.fire({
      title: 'Are you sure you want to affecte this formateur?',
      text: 'Demande cannot be reversed',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Go ahead',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('idFormateur,idFormation: ', idFormateur, idFormation);
        this.DemandeService.accepteDemande(idFormateur, idFormation) 
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: 'Demande accepted successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            // DELETE ALL DEMANDS WITH THAT FORMATION ID
            this.DemandeService.deleteByFormationId(idFormation)
              .then((response) => {
                // Refresh the list after deletion
                this.getAllDemandes();
              })
              .catch((error) => {
                console.log(error);
              });
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
