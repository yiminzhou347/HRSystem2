import { Observable } from 'rxjs';
import { Employee } from './../../employee-list/employee-list.component';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor( private http :HttpClient) { }


  retrieveAllEmployees():Observable<any>{
    return this.http.get<Employee[]>('http://localhost:8080/employees')
  }

  deleteEmployee(id :number):Observable<any>{
    return this.http.delete(`http://localhost:8080/employees/${id}`,
    {responseType: 'text'})
  }

  retrieveEmployee(id:number):Observable<any>{
    return this.http.get(`http://localhost:8080/employees/id/${id}`)
  }

  updateEmployee(employee :Employee):Observable<any>{
    return this.http.put(`http://localhost:8080/employees`,employee)
  }

  addEmployee(employee :Employee):Observable<any>{
    return this.http.post(`http://localhost:8080/employees`,employee)
  }
}




