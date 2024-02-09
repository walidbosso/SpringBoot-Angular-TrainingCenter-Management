import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Individu } from 'app/model/individu.model';
import { IndividuService } from 'app/services/individu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'edit-individu',
  templateUrl: './edit-individu.component.html',
  styleUrls: ['./edit-individu.component.css'],
})
export class EditIndividuComponent implements OnInit {
  individu: Individu = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    tele: '',
    ville: '',
    code: '',
    dateNaissance: '',
  };
  isSubmited: boolean = false;

  constructor(
    public individuService: IndividuService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.individuService
      .getIndividuById(this.route.snapshot.params['id'])
      .then((response) => {
        this.individu = response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  updateIndividu() {
    this.isSubmited = true;
    this.individuService
      .updateIndividu(this.individu)
      .then((response) => {
        this.isSubmited = false;
        Swal.fire({
          icon: 'success',
          title: 'Individu updated successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/admin/individu/get']); // redirect to the individus list
        return response.data;
      })
      .catch((error) => {
        this.isSubmited = false;
        Swal.fire({
          icon: 'error',
          title: 'Some error occurred',
          showConfirmButton: false,
          timer: 1500,
        });
        return error;
      });
  }
}
