import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService){}

  ngOnInit(){
    this.hardcodedAuthenticationService.logout()
  }
}



