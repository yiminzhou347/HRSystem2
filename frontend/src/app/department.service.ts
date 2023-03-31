import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  //private getAllUrl="http://localhost:8080/api/department/getAll";//"localhost:8080/api/department/getAll";localhost:DEPARTMENT-SERVICE:9091
  private getAllUrl="http://localhost:9091/api/department/getAll";
  private getUrl="http://localhost:9091/api/department";
  private addUrl="http://localhost:9091/api/department/add";
  private updateUrl="http://localhost:9091/api/department/update";
  private deleteUrl="http://localhost:9091/api/department/delete";
  private publishUrl="http://localhost:9093/api/producer/publish";
  constructor(private httpClient:HttpClient) { }

  getDepartmentsList():Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.getAllUrl}`);//(`${this.baseUrl}`);
  }

  addDepartment(department:Department):Observable<any>{
      return this.httpClient.post<any>(`${this.addUrl}`,department);
  }

  getDepartmentById(id:number):Observable<Department>{
      return this.httpClient.get<Department>(`${this.getUrl}/${id}`);
  }

  updateDepartment(id:number,department:Department):Observable<any>{
      return this.httpClient.put(`${this.updateUrl}/${id}`,department);
  }

  deleteDepartment(id:number):Observable<any>{
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }

  publishHrEventMessage(message:string):Observable<Object>{
    console.log(message);
    return this.httpClient.post(`${this.publishUrl}`,message);
  }
}
