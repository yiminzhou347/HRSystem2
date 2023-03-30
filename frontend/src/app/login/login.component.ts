import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username ='yimin'
  password='1234'
  errorMessage = 'Invalid Credentials'
  invalidLogin=false


  //Router
  //angular.giveMeRouter
  //Denpendency Injection

  //pass the router when create the LoginComponent 
  // when you pass in a parameter to constructor, it can be used as a member variable automatically

  constructor(private router : Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService){


  }



  handleLogin(){
    // if(this.username==='yimin' && this.password ==='1234'){

    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      //Redirect to Welcome Page
      //passing a parameter after the welcome url
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
    console.log(this.username);
    // console.log(this.password);
  }

}
