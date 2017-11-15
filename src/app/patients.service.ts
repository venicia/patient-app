import { Injectable } from '@angular/core';
import { BehaviorSubject }  from  'rxjs/BehaviorSubject'; 


@Injectable()
export class PatientsService {
 
  private patientsData = new BehaviorSubject<any>(PATIENTS_INITIAL);
  patients = this.patientsData.asObservable();

  constructor() { }

  updatePatients(patients) {
    this.patientsData.next(patients);
  }

}

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  insuranceName: string;
  insuranceId: string;
  email: string;
  phone: string;
  regComment: string;
}

const PATIENTS_INITIAL: Patient[] = [
  {id: 1, firstName: 'George', lastName: 'Washington', insuranceName: 'UnitedHealthCare', insuranceId: '12345', email:'gw@email.com', phone:'702-123-4567', regComment:'blah blah blah'},
  {id: 2, firstName: 'John', lastName: 'Adams', insuranceName: 'BlueCross', insuranceId: '123456', email:'ja@email.com', phone:'702-123-4568', regComment:'blah2 blah blah'},
  {id: 3, firstName: 'Thomas', lastName: 'Jefferson', insuranceName: 'Anthem', insuranceId: '123457', email:'tj@email.com', phone:'702-123-4569', regComment:'blah3 blah blah'}, 
  {id: 4, firstName: 'James', lastName: 'Madison', insuranceName: 'UnitedHealthCare', insuranceId: '123458', email:'jm@email.com', phone:'702-123-4569', regComment:'blah4 blah blah'}, 
  {id: 5, firstName: 'James', lastName: 'Monroe', insuranceName: 'Anthem', insuranceId: '123459', email:'jm2@email.com', phone:'702-123-4569', regComment:'blah5 blah blah'}, 
  {id: 6, firstName: 'John Quincy', lastName: 'Adams', insuranceName: 'BlueCross', insuranceId: '12346', email:'jqa@email.com', phone:'702-123-4569', regComment:'blah6 blah blah'}, 
  {id: 7, firstName: 'Andrew', lastName: 'Jackson', insuranceName: 'Anthem', insuranceId: '12347', email:'aj@email.com', phone:'702-123-4569', regComment:'blah7 blah blah'}, 
  {id: 8, firstName: 'Martin Van', lastName: 'Buren', insuranceName: 'Anthem', insuranceId: '12387', email:'mvb@email.com', phone:'702-123-4569', regComment:'blah8 blah blah'}, 
];
