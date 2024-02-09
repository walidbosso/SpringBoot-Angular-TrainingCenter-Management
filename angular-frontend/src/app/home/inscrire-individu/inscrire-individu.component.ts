import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IndividuService } from 'app/services/individu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'inscrire-individu',
  templateUrl: './inscrire-individu.component.html',
  styleUrls: ['./inscrire-individu.component.css']
})

export class InscrireIndividuComponent implements OnInit{
  private idFormation: number;
  msgError: string = '';

  constructor(
    private individuService: IndividuService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.idFormation = this.route.snapshot.params['id'];
    this.signupForm.reset();
  }

  signupForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    tele: new FormControl('', [Validators.required]),
    ville: new FormControl(''),
    dateNaissance: new FormControl('')
  });

  get nom() {
    return this.signupForm.get('nom') as FormControl
  }
  get prenom() {
    return this.signupForm.get('prenom') as FormControl
  }
  get email() {
    return this.signupForm.get('email') as FormControl
  }
  get tele() {
    return this.signupForm.get('tele') as FormControl
  }
  
  signup() {
    this.individuService.signup(this.idFormation, this.signupForm.value).then(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Registration successful',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['home']); // redirect to the individus list
        return response.data;
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Some error occurred',
        showConfirmButton: false,
        timer: 1500,
      });
      this.msgError = 'An error occurred';
      return error
    });
  }

}
