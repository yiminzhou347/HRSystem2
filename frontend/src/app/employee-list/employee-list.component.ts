import { Router } from '@angular/router';
import { EmployeeDataService } from './../service/data/employee-data.service';
import { Component, OnInit } from '@angular/core';

export class Employee{
  constructor(
    public id:number,
    public name:string,
    public email:string,
    public phoneNumber:number,
    public departmentId:number,
    public address:string,
    public isManager:boolean,
    public isAdmin:boolean
  ){}
}




@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  message :string =''
  employees : Employee[] = [];
  constructor(
    private service: EmployeeDataService,
    private router: Router
  ){}

  ngOnInit(){
    this.refreshEmployees()
  }

  refreshEmployees(){
    this.service.retrieveAllEmployees().subscribe(
      response=>{
        console.log(response)
        this.employees=response
      }
    );
  }

  deleteEmployee(id:number){
    this.service.deleteEmployee(id).subscribe(
      response=>{
        this.message='Delete Successfully!'
        this.refreshEmployees()
      }
    )
  }

  updateEmployee(id:number){
    this.router.navigate(['employees/id',id])
  }

  addEmployee(){
    this.router.navigate(['employees/id',-1])
  }
}

