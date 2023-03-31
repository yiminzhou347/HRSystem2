import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit{
  department: Department=new Department;
  id:number=0;
  constructor(private departmentService:DepartmentService, 
    private route:ActivatedRoute, private router:Router){

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.departmentService.getDepartmentById(this.id).subscribe(
        response=>  {
          this.department=response
              },
          error=>console.log(error) 
    );
  }
  
  displayDepartmentList(){
    this.router.navigate(['/departments'])
  }

  updateDepartment(id:number,department:Department){
    this.departmentService.updateDepartment(id,department).subscribe(
      response=>{
        console.log(response)
      },
      error=>console.log(error) 
    );
    console.log('a department with id : '+this.department.id+' has been updated');
    this.departmentService.publishHrEventMessage('a department with id : '+this.department.id+' has been updated').subscribe(
      response=>{
        console.log(response)
      },
      error=>console.log(error)
    );
  }
  onSubmit(){
    console.log(this.department);
    this.updateDepartment(this.id,this.department);
    this.displayDepartmentList();
  }
}
