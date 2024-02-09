import { Component, OnInit } from '@angular/core';
import { Individu } from 'app/model/individu.model';
import { IndividuService } from 'app/services/individu.service';
import { UserAuthsService } from 'app/services/user-auths.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'all-individus',
  templateUrl: './all-individus.component.html',
  styleUrls: ['./all-individus.component.css'],
})
export class AllIndividusComponent implements OnInit {
  individus: Individu[] = [];
  permission: boolean;
 // index: number = 0;

  constructor(
    private individuService: IndividuService,
    private userAuthsService: UserAuthsService
  ) {}

  ngOnInit(): void {
    this.getAllIndividus();
    this.permission = this.userAuthsService.isAdmin();
  }

  // This method is used to generate rows numbers in the individus list instead of displaying the id 
  // increment(): number {
  //   return this.index += 1;
  // }

  getAllIndividus() {
    this.individuService.getAllIndividus().then((response) => {
      this.individus = response.data;
    })
    .catch((error) => {
      return error;
    });
  }

  deleteIndividu(id: number) {
    //give user a chance to cancel, using notification sweetalert
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'Individu deleted cannot be recovered',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Go ahead with deletion',
    }).then((result) => {
      if (result.isConfirmed) {
        this.individuService
          .deleteIndividu(id)
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: 'Individu deleted successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            this.getAllIndividus(); //Refresh after deletion
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
