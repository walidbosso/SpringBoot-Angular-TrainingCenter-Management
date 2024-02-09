import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IndividuService } from 'app/services/individu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  idFormation: number;

  constructor(
    private route:ActivatedRoute,
    private individuService: IndividuService
  ) {}

  ngOnInit(): void {
    this.idFormation = this.route.snapshot.params['id'];
    this.evaluationForm.reset();
  }

  evaluationForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
    quality: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    pace: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    course: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    tp: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    mastery: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
  });

  get code() {
    return this.evaluationForm.get('code') as FormControl
  }
  get quality() {
    return this.evaluationForm.get('quality') as FormControl
  }
  get pace() {
    return this.evaluationForm.get('pace') as FormControl
  }
  get course() {
    return this.evaluationForm.get('course') as FormControl
  }
  get tp() {
    return this.evaluationForm.get('tp') as FormControl
  }
  get mastery() {
    return this.evaluationForm.get('mastery') as FormControl
  }

  evaluate() {
    this.individuService.evaluate(this.idFormation, this.evaluationForm.value).then(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'FeedBack send successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        this.evaluationForm.reset();
        return response.data;
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Some error occurred',
        showConfirmButton: false,
        timer: 1500,
      });
      return error
    });
  }
}
