import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})

//RouterGuardService is a service which  is used to make sure
//user is logged in before accessing any pages.
//It uses CanActivate interface
export class RouteGuardService implements CanActivate {


  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router:Router) { }

  //this copied from CanActivate interface
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodedAuthenticationService.isUserLoggedIn())

      return true;
    //If the user is not loggedin this logic navigates the user to log in 
    //page each time user wants to access the website
    this.router.navigate(['/login'])
    return false;
  }
}
