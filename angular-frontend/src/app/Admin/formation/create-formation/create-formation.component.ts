import { Component } from '@angular/core';
import { FormationService } from '../formation.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entreprise } from 'app/Admin/entreprise/entreprise';
import { EntrepriseService } from 'app/Admin/entreprise/entreprise.service';
import { Formator } from 'app/model/formator.model';
import { FormatorService } from 'app/services/formators.service';
import { Formation } from '../formation';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css'],
})
export class CreateFormationComponent {
  // nom: string = '';
  entreprises: Entreprise[] = [];
  formateurs: Formator[] = [];
  selectedImage: File;
  // entreprise: Entreprise ;
  // formateur: Formator ;
  // categorie: string = '';
  // objectif: string = '';
  // description: string = '';
  // duree: number = 12;
  // cout: number = 300;
  // dateDebut: Date = new Date();
  // dateFin: Date = null;
  formation: Formation = {
    // id: 0,
    nom: '',
    categorie: '',
    objectif: '',
    description: '',
    duree: '',
    cout: 0,
    dateDebut: null,
    dateFin: null,
    formateur: null,
    entreprise: null,
    // image_name:null
  };
  // formateur_id: number = 0;
  //  entreprise_id: number=0;

  isSubmitting: boolean = false; //track button clicked or no, when user clicking multiple times
  constructor(
    public formationService: FormationService,
    public entrepriseService: EntrepriseService,
    public formatorService: FormatorService
  ) {}

  // ngOnInit(): void { //you gotta get rid of ngModel to use it
  //   this.myForm = this.formBuilder.group({ //FormGroup=formBuilder.group
  //     nom: ['', Validators.required], // name required
  //     email: ['', [Validators.required, Validators.email]] // email required, w syntaxe  (email) shih built-in ghi staemlom
  //   })
  // }

  ngOnInit() {
    this.getAllEntreprises();
    this.getAllFormateurs();
  } // on loand we call the function below

  onImageSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.selectedImage = file;
    }
  }

  getAllEntreprises() {
    this.entrepriseService
      .getAllEntreprises()
      .then((response) => {
        console.log('getAllEntreprises ' + response.data);
        this.entreprises = response.data;
        // this.entreprise = this.entreprises[0] || null;
      })
      .catch((error) => {
        return error;
      });
  }
  getAllFormateurs() {
    this.formatorService
      .getAllFormateurs()
      .then((response) => {
        console.log('getAllFormateurs ' + response.data);
        this.formateurs = response.data;
        // this.formateur = this.formateurs[0] || null;
      })
      .catch((error) => {
        return error;
      });
  }
  onEntrepriseSelected(entrepriseId: string) {
    console.log('entrepriseId ' + entrepriseId);
    // this.entreprise_id = parseInt(entrepriseId);
    // Find the selected entreprise from the array and assign it to the variable
    const selectedEntreprise =
      this.entreprises.find(
        (entreprise) => entreprise.id === parseInt(entrepriseId)
      ) || null;
    console.log('selectedEntreprise ' + selectedEntreprise);
    this.formation.entreprise = selectedEntreprise;
  }
  onFormateurSelected(formateurId: string) {
    console.log(formateurId);
    // this.entreprise_id = parseInt(entrepriseId);
    // Find the selected entreprise from the array and assign it to the variable
    const selectedFormateur =
      this.formateurs.find(
        (formateur) => formateur.id === parseInt(formateurId)
      ) || null;
    console.log('selectedFormateur ' + selectedFormateur);
    this.formation.formateur = selectedFormateur;
  }

  addFormationWithImage(): void {
    this.isSubmitting = true;

    this.formationService
      .addFormationWithImage(this.formation, this.selectedImage)
      .then((response) => {
        this.isSubmitting = false;

        Swal.fire({
          icon: 'success',
          title: 'Formation created successfully',
          showConfirmButton: false,
          timer: 1500,
        });

        this.formation = {
          nom: '',
          categorie: '',
          objectif: '',
          description: '',
          duree: '',
          cout: 0,
          dateDebut: null,
          dateFin: null,
          formateur: null,
          entreprise: null,
        };

        // Reset selected image
        this.selectedImage = null;
      })
      .catch((error) => {
        this.isSubmitting = false;

        Swal.fire({
          icon: 'error',
          title: 'Some error occurred',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }
  getImageUrl(): any {
    // console.log(this.selectedImage);
    return this.selectedImage ? URL.createObjectURL(this.selectedImage) : '';
  }
  

  addFormation() {
    this.isSubmitting = true;
    this.formationService
      .addFormation(
        this.formation
      )
      .then((response) => {
        
        this.isSubmitting = false;
        Swal.fire({
          icon: 'success',
          title: 'Formation created successfully',
          showConfirmButton: false,
          timer: 1500,
        });

        this.formation = {
          // id: 0,
          nom: '',
          categorie: '',
          objectif: '',
          description: '',
          duree: '',
          cout: 0,
          dateDebut: null,
          dateFin: null,
          formateur: null,
          entreprise: null,
        };
 
        return response;
      }) //response
      .catch((error) => {
        console.log('add this.entreprise ERROR ' + error);
        this.isSubmitting = false;
        Swal.fire({
          icon: 'error',
          title: 'Some error occured',
          showConfirmButton: false,
          timer: 1500,
        });
        return error;
      });
  }
}
