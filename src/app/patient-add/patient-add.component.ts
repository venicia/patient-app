import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PatientsService, Patient } from '../patients.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PatientAddComponent implements OnInit {

  patients: any;
  patient = <Patient>{};
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private _patients: PatientsService, private router: Router) { 
    this._patients.patients.subscribe(res => this.patients = res);          
  }

  ngOnInit() {
  }

  addPatient() {
    console.log("Adding patient to database.");
    if (this.patient) {
      this.patient.id = this.patients.length + 1;
      this.patients.push(this.patient);
      this.patient = <Patient>{};
      this._patients.updatePatients(this.patients);
      this.router.navigate(['']);
    }

  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
