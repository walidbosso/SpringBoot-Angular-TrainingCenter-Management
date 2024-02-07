import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'app/services/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  competences: string = '';
  remarques: string = '';
  isSubmitting: boolean = false;
  emailEmptyError: boolean;
  emailFormatError: boolean;

  constructor(private signupService: SignupService,
    private router: Router) {

  }

  

  signupFormator() {
    this.emailFormatError = false;
  this.emailEmptyError = false;

  // Check if the email field is empty
  if (!this.email) {
    this.emailEmptyError = true;
    return; // Stop the form submission
  }

  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email format is valid
  if (!emailRegex.test(this.email)) {
    this.emailFormatError = true;
    return; // Stop the form submission
  }
  
    this.isSubmitting = true;
    this.signupService.addFormateur({ name: this.name, email: this.email, password: this.password, competences: this.competences, remarques: this.remarques })
      .then(response => {
        console.log(response);
        this.isSubmitting = false;
        this.router.navigate(['/auth/login']);

        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.competences = '';
        this.remarques = '';

        return response;
      })
  }

  submitForm() {
    if (this.password !== this.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Form submitted successfully');
  }

}
