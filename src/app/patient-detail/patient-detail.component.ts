import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PatientsService, Patient } from '../patients.service';
import { ActivatedRoute } from '@angular/router';
import { MatCard } from '@angular/material';



@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PatientDetailComponent implements OnInit {
  
  patients: any;
  patient = <Patient>{};
  patientId: number;

  constructor(private route: ActivatedRoute, private _patients: PatientsService) {
      this.route.params.subscribe(res => this.patientId = res.id );
      console.log("Patient id: " + this.patientId);
  }

  ngOnInit() {
    this._patients.patients.subscribe(res => this.patients = res);      
    console.log("Number of patients: " + this.patients.length);
    
    var patient = this.patients.find(function(patient) {
        if (patient.id == this.patientId) {
          return patient;
        }
      }.bind(this));
    if (patient) {
      console.log("Patient " + this.patientId + " has been found. Loading... " + patient.firstName + " " + patient.lastName);
      this.patient = patient;
    } else {
      console.log("Cannot find patient " + this.patientId);
    }
  }

}
