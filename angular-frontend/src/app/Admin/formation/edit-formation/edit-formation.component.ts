import { Component } from '@angular/core';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { EntrepriseService } from 'app/Admin/entreprise/entreprise.service';
import { Entreprise } from 'app/Admin/entreprise/entreprise';
import { Formator } from 'app/model/formator.model';
import { FormatorService } from 'app/services/formators.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent {
  entreprises: Entreprise[]=[] ;
  entreprise: Entreprise;
  formateurs: Formator[]=[] ;
  formateur: Formator;
  formateur_id: number=0;
  formation: Formation = { 
    id: 0, nom: '', categorie: '' ,objectif:'' ,description:'', duree:'', cout:0, dateDebut:new Date(), dateFin: new Date(),formateur:null,entreprise:null
  };  isSubmitting: boolean = false;

  constructor(public formationService: FormationService, private route:ActivatedRoute,public entrepriseService:EntrepriseService,public formatorService:FormatorService){
 
    this.formation = {
    // It uses this.route.snapshot.params['id'] to retrieve the route 
    // 'formations/:id/edit'
    id: this.route.snapshot.params['id'],
    nom: '', categorie: '' ,objectif:'' ,description:'', duree:'', cout:0, dateDebut:new Date(), dateFin: new Date(),formateur:null,entreprise:null
    }

}
  ngOnInit(): void{
    this.getAllEntreprises();
    this.getAllFormateurs();
    this.formationService.getFormationById(this.route.snapshot.params['id'])
    .then((response)=>{
      //console.log(response);
      //NOW THAT VARIABLE had data in it using id once the page is loaded
      this.formation = response.data;
      //console.log(this.formation);
    })
    .catch(error=>{return error});
  }


  
    getAllEntreprises(){
      this.entrepriseService.getAllEntreprises()
      .then((response)=>{
        console.log(response);
        this.entreprises=response.data;
      })
      .catch((error)=>{
        return error;
      }); 
      }
      onEntrepriseSelected(entrepriseId: string) {
        console.log(entrepriseId);
        // this.entreprise_id = parseInt(entrepriseId);
        // Find the selected entreprise from the array and assign it to the variable
        const selectedEntreprise = this.entreprises.find(entreprise => entreprise.id === parseInt(entrepriseId)) || null;
        console.log(selectedEntreprise);
        this.formation.entreprise = selectedEntreprise;
      }
      getAllFormateurs(){
        this.formatorService.getAllFormateurs()
        .then((response)=>{
          console.log(response);
          this.formateurs=response.data;
        })
        .catch((error)=>{
          return error;
        });  
        }
        onFormateurSelected(formateurId: string) {
          console.log(formateurId);
          // this.entreprise_id = parseInt(entrepriseId);
          // Find the selected entreprise from the array and assign it to the variable
          const selectedFormateur = this.formateurs.find(formateur => formateur.id === parseInt(formateurId)) || null;
          console.log(selectedFormateur);
          this.formation.formateur = selectedFormateur;
        }
//FORM CALLS THIS FUNCTION with data from inputs
editFormation(){
  
  console.log(this.formation);
  this.isSubmitting = true;
  //we already updated it with ngModel formation.title etc in html
  this.formationService.updateFormation(this.formation)
  .then(response=>{
    console.log(response);
    this.isSubmitting = false;
    Swal.fire({
      icon: 'success',
      title: 'formation updated successfully',
      showConfirmButton: false,
      timer: 1500
    })
    return response.data;
  })
    .catch(error=>{
      console.log(error);
      this.isSubmitting = false;
     Swal.fire({
        icon: 'error',
        title: 'Some error occurred',
        showConfirmButton: false,
        timer: 1500
        })
     return error;
    });
    }

}
