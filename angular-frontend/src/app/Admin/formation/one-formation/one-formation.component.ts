import { Component } from '@angular/core';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-one-formation',
  templateUrl: './one-formation.component.html',
  styleUrls: ['./one-formation.component.css']
})
export class OneFormationComponent {
  formation: Formation = { 
    id: 0, nom: '', categorie: '' ,objectif:'' ,description:'', duree:'', cout:0, dateDebut:new Date(), dateFin: new Date(),formateur_id:0,entreprise:null
  };
isSubmitting: boolean = false;

constructor(public formationService: FormationService, private route:ActivatedRoute){
this.formation = {
// It uses this.route.snapshot.params['id'] to retrieve the route 
// 'formations/:id/edit'
id: this.route.snapshot.params['id'],
nom: '', categorie: '' ,objectif:'' ,description:'', duree:'', cout:0, dateDebut:new Date(), dateFin: new Date(),formateur_id:0,entreprise:null
}
}
ngOnInit(): void{
this.formationService.getFormationById(this.route.snapshot.params['id'])
.then((response)=>{
//console.log(response);
//WE FILL VARIABLE WITH formation EXTRACTED USING ID PROVIDED IN URL
this.formation = response.data;
console.log(this.formation);
})
.catch(error=>{return error});
}
}
