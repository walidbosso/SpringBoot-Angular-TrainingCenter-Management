import { Component, OnInit } from '@angular/core';
import { ScriptsService } from '../services/scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private scriptService: ScriptsService){}

  ngOnInit(): void {
    this.setBodyAttributes();
    this.scriptService.loadScripts();
  }

  setBodyAttributes() {
    const body: any = document.getElementById("kt_app_body");
  
    // Remove all attributes
    Array.from(body.attributes).forEach((attribute:any) => {
      body.removeAttribute(attribute.name);
    });
  
    // Set the specified attributes
    body.setAttribute('data-kt-app-layout', 'light-header');
    body.setAttribute('data-kt-app-header-fixed', 'true');
    body.setAttribute('data-kt-app-toolbar-enabled', 'true');
    body.setAttribute('class', 'app-default');
  }
}
