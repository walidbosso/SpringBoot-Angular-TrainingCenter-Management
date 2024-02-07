import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from 'app/services/signup.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {

  // name: string = '';
  // email: string = '';
  // password: string = '';
  // confirmPassword: string = '';
  // competences: string = '';
  // remarques: string = '';
  isSubmitting: boolean = false;

  ngOnInit(): void {
    this.signupForm.reset();
  }
 
  signupForm: FormGroup;
  constructor(private signupService: SignupService, private router: Router) {
    // Initialize form with form controls and validators
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      competences: new FormControl(''),
      remarques: new FormControl('')
    });
  }
  
  get name() { return this.signupForm.get('name'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }
  get competences() { return this.signupForm.get('competences'); }
  get remarques() { return this.signupForm.get('remarques'); }

signupFormator() {
    this.isSubmitting = true;

    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
        this.signupService.addFormateur(this.signupForm.value).then(
          (response: any) => {
            this.router.navigate(['/auth/login']); 
            return response.data;
          })  
      } else {
        this.isSubmitting = false;
      }
  }

}
