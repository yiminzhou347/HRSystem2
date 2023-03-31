import { EmployeeComponent } from './employee/employee.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  //The order about the routers are important, it will match from top to bottom

  {path:'',component:LoginComponent, },//canActivate, RouteGuardService
  {path:'login', component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'employees',component:EmployeeListComponent, canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:'departments',component:DepartmentListComponent, canActivate:[RouteGuardService]},
  {path:'employees/id/:id',component:EmployeeComponent, canActivate:[RouteGuardService]},
  // ** means anything, so it can take care of the unmatched routers and redirect them to errorComponent  
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


