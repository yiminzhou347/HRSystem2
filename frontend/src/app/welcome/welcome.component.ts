import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  message ='Some Welcome Message Yimin'
  message2 :String ='Welcome to our HR System!';
  name = ''
  nameFromService :string = '';
  idFromService :number=0;
  emailFromService :string = ""
  //ActivatedRoute
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService 
    
    ){

  }

  // void means no return 
  // ngOnInit() :void{

  // }

  ngOnInit(){
    // this.message =5 ; //this gives an error
    //this method will run when the component is initialized 
    //pick the name parameter from router
    this.name = this.route.snapshot.params['name']

  }

  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldService())
    return this.service.executeHelloWorldService().subscribe(
      response=> this.handleSuccessfulResponse(response)
    );
  }

  
  getWelcomeMessageWithParameter(){
    // console.log(this.service.executeHelloWorldService())
    return this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response=> this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response:any){
    // console.log(response.name)
    this.nameFromService=response.name;
    this.idFromService=response.id;
    this.emailFromService=response.email;
  }
}
