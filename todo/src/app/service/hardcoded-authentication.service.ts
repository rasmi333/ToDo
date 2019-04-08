import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


//HardcodedAuthenticationService is a class @Injectible make it servcice.
//It is used for dependency injection. Whenever we need this service 
//we just need to create object of this service inside the constructer 
//of the componet and use that object to call the functions defined in this service
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if (username==='rasmi'&& password==='dummy'){
      sessionStorage.setItem('AuthenticateUser',username)
      return true
    }
    
      return false
    
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('AuthenticateUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('AuthenticateUser');
  }
}
