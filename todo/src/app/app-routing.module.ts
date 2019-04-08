import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
//canActivate[RouteGuardservice make sure all these url required login before accesing any page ]
const routes: Routes = [
   {  path: '', component: LoginComponent},
   {  path: 'login', component: LoginComponent},
   {  path: 'welcome/:name', component: WelcomeComponent,canActivate:[RouteGuardService]},
   {  path: 'todos', component: ListtodosComponent,canActivate:[RouteGuardService]},
   {  path: 'logout', component: LogoutComponent,canActivate:[RouteGuardService]},
   {  path: '**', component: ErrorComponent,canActivate:[RouteGuardService]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
