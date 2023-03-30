import { Employee } from './../../employee-list/employee-list.component';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) {

   }
   executeHelloWorldService():Observable<any>{
    return this.http.get<Employee>('http://localhost:8080/employees/1')
   }


   executeHelloWorldServiceWithPathVariable(name:any):Observable<any>{
    return this.http.get<Employee>(`http://localhost:8080/employees/name/${name}`);
   }

}
