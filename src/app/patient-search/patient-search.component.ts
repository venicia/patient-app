import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { PatientsService } from '../patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PatientSearchComponent implements OnInit {

  patients: any;
  displayedColumns = ['id', 'firstName', 'lastName', 'insuranceName', 'insuranceId', 'email', 'phone', 'comment'];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor(private router: Router, private _patients: PatientsService) { 
    console.log("Patient search comp constructor...");
  }
  
  ngOnInit() {
    this._patients.patients.subscribe(res => this.patients = res);   
    this.dataSource = new MatTableDataSource(this.patients);    
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addPatient() {
    console.log("Routing to add patient page...");
    this.router.navigate(['add']);
  }

  viewPatient(row) {
    console.log("Routing to patient page..." + row.id + " - "  + row.firstName + " " + row.lastName);
    this.router.navigate(['patient/'+row.id ])
  }
}

