import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { FormsModule } from '@angular/forms';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    DeleteDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
