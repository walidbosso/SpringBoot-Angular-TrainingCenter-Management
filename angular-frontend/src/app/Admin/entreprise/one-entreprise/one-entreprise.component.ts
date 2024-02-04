import { Component } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-entreprise',
  templateUrl: './one-entreprise.component.html',
  styleUrls: ['./one-entreprise.component.css']
})
export class OneEntrepriseComponent {
  entreprise: Entreprise = { id: 0, nom: '', address: '' ,tel:'' ,url:'', email:''};
isSubmitting: boolean = false;

constructor(public entrepriseService: EntrepriseService, private route:ActivatedRoute){
this.entreprise = {
// It uses this.route.snapshot.params['id'] to retrieve the route 
// 'entreprises/:id/edit'
id: this.route.snapshot.params['id'],
nom: '',
address: '',
tel: '',
url: '',
email: '',
}
}
ngOnInit(): void{
this.entrepriseService.getEntrepriseById(this.route.snapshot.params['id'])
.then((response)=>{
//console.log(response);
//WE FILL VARIABLE WITH entreprise EXTRACTED USING ID PROVIDED IN URL
this.entreprise = response.data;
console.log(this.entreprise);
})
.catch(error=>{return error});
}
}
