import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = 'rasmi'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  constructor(private router: Router,
    private hardcodedauthentication: HardcodedAuthenticationService) {
      
  

     }



  ngOnInit() {
  }
  handelLogin(){
    if(this.hardcodedauthentication.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = true

    }
    else{
      this.invalidLogin=true
    }
  }
}
