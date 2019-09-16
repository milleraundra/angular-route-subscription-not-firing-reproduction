import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';

const schoolRoutes: Routes = [
  {path: '', component: SchoolsComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(schoolRoutes)
    ],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }