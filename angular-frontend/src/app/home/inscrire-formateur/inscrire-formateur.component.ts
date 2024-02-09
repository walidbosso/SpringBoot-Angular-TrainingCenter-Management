import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande } from 'app/Admin/demande/demande';
import { DemandeService } from 'app/Admin/demande/demande.service';
import { Formation } from 'app/Admin/formation/formation';
import { FormationService } from 'app/Admin/formation/formation.service';
import { Formator } from 'app/model/formator.model';
import { FormatorService } from 'app/services/formators.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'inscrire-formateur',
  templateUrl: './inscrire-formateur.component.html',
  styleUrls: ['./inscrire-formateur.component.css']
})

export class InscrireFormateurComponent implements OnInit{
  private idFormation: number;
  formation: Formation;
  demande: Demande;
  msgError: string = '';


  constructor(
    private formateurService: FormatorService,
    private formationService: FormationService,
    private demandeService: DemandeService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.idFormation = this.route.snapshot.params['id'];
    this.formationService
    .getFormationById(this.route.snapshot.params['id'])
    .then((response) => {
      //console.log(response);
      //WE FILL VARIABLE WITH Demande EXTRACTED USING ID PROVIDED IN URL
      this.formation = response.data;
      console.log(this.formation.nom);
    })
    .catch((error) => {
      return error;
    });

 
    this.signupForm.reset();
  }

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    competences: new FormControl('', [Validators.required]),
    remarques: new FormControl(''),
  });

  get name() {
    return this.signupForm.get('name') as FormControl
  }
  get password() {
    return this.signupForm.get('password') as FormControl
  }
  get email() {
    return this.signupForm.get('email') as FormControl
  }
  get competences() {
    return this.signupForm.get('competences') as FormControl
  }
  get remarques() {
    return this.signupForm.get('remarques') as FormControl
  }
  
  addDemande() {
    console.log("addDemande");
    const formatorData: Partial<Formator> = this.signupForm.value;
        this.demande = {
          formateur: formatorData as Formator,
          formation: this.formation,
        };
        console.log("this.demande "+ this.demande.formation.nom);
  
        // Add the Demande to the database
        this.demandeService.addDemande(this.demande).then(
          (response: any) => {
            console.log("addDemande response "+response);
            Swal.fire({ 
              icon: 'success',
              title: 'Demande sent to admin to be analysed',
              showConfirmButton: false,
              timer: 3000,
            });
            this.router.navigate(['home']); // redirect to the formateurs list
            return response.data;
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Some error occurred',
              showConfirmButton: false,
              timer: 3000,
            });
            this.msgError = 'An error occurred';
            return error;
          });
      
     
  }
  

}
