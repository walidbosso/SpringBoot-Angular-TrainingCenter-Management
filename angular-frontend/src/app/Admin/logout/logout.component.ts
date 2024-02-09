import { Component} from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class Logout {
  router: any;
  logout(): void {
    
    //this.router.navigate(['/home']);
  }

}


