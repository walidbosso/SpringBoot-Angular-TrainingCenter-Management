import { Component} from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class Logout {
  logout(): void {
    
    window.location.href = 'https://www.google.com';

  }

}


