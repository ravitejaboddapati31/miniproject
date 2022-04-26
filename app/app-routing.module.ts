import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'homepage', component: HomepageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }