import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeSignupComponent } from './employee-signup/employee-signup.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component: EmployeeLoginComponent
  },
  {
    path:'signup', component: EmployeeSignupComponent
  },
  {
    path:'employee-list', component: EmployeeListComponent
  },
  {
    path:'employee-detail/:id', component: EmployeeDetailComponent
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
