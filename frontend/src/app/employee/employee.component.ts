import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './../employee-list/employee-list.component';
import { EmployeeDataService } from './../service/data/employee-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  id:number= 0 ;
  // employee :Employee = new Employee(0,'yimin','yimin@gmail.com',12312312,123,'bowne street',true,true) ;
  employee ={} as Employee 



  constructor(
    private service:EmployeeDataService,
    private route:ActivatedRoute,
    private router:Router

  ){}


  ngOnInit() {
    
    this.id=this.route.snapshot.params['id']
    this.employee = new Employee(-1,'','',0,0,'',false,false) ;
    if(this.id!= -1){
      this.service.retrieveEmployee(this.id).subscribe(
        data=> {this.employee = data
        console.log(this.employee)
        }
      )
    }
  }


  saveEmployee(){
    if(this.employee.id ==-1){
      this.service.addEmployee(this.employee).subscribe(
        data=>{
          // console.log(data)
          this.router.navigate(['employees'])
        }
      )

    }else{
      this.service.updateEmployee(this.employee).subscribe(
        data=>{
          // console.log(data)
          this.router.navigate(['employees'])
        }
      )
    }

      
    
  }
}
