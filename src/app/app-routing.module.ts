import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientSearchComponent} from './patient-search/patient-search.component';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import {PatientAddComponent} from './patient-add/patient-add.component';

const routes: Routes = [
  {
    path: '',
    component: PatientSearchComponent
  },
  {
    path: 'patient/:id',
    component: PatientDetailComponent
  },
  {
    path: 'add',
    component: PatientAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
