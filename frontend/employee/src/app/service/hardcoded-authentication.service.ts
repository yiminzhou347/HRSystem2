import { Injectable } from '@angular/core';
// ng g s service/hardcodedAuthentication


//@Injectable will use this service and inject it into other places  
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {

  }

  authenticate(username: any,password: any){
    console.log('Before:'+this.isUserLoggedIn());

    if(username==="yimin" && password==="1234"){
      sessionStorage.setItem('authenticatedUser',username)
      console.log('After:'+this.isUserLoggedIn());
      return true
    }else{
      return false
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user ===null)
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
