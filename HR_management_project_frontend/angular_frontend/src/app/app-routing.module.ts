import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';

const routes: Routes = [
  {path:'departments', component: DepartmentListComponent},
  {path:'add-department', component: AddDepartmentComponent},
  {path: 'update-department/:id', component:UpdateDepartmentComponent},
  {path: 'delete-department/:id', component:DeleteDepartmentComponent},
  {path:'', redirectTo:'departments',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
