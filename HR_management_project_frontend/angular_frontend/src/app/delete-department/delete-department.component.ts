import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDepartmentComponent implements OnInit{
  department:Department=new Department;
  id:number=0;
  constructor(private departmentService:DepartmentService,
    private route:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.departmentService.getDepartmentById(this.id).subscribe(
      response=>{
        this.department=response
      },
      error=>console.log(error)
    );
  }

  onSubmit(){
      this.deleteDepartment(this.id);
      this.displayDepartmentList();
  }

  deleteDepartment(id:number){
    this.departmentService.deleteDepartment(id).subscribe(
      response=>{
        console.log(response)
      },
      error=>console.log(error)
    );
    this.departmentService.publishHrEventMessage('a department with id : '+this.department.id+' has been deleted').subscribe(
      response=>{
        console.log(response)
      },
      error=>console.log(error)
    );
  }

  displayDepartmentList(){
    this.router.navigate(['/departments'])
  }
}
