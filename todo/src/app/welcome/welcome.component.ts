import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'
  name = ''
  welcomeMessageFromService:string
  //dependency injection activated route
  constructor(private route: ActivatedRoute,
    private welcomeDataService:WelcomeDataService) { 

  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }


  //this function get data from backend
  getWelcomeMessage(){
   // console.log(this.welcomeDataService.executeHelloWorldBeanService())
   // console.log("het welcome message")
   this.welcomeDataService.executeHelloWorldBeanService().subscribe(
   response => this.handelSuccessfulResponse(response),
   error => this.handleErrorResponse(error)
   );
   //console.log('last line of response')
  }

//this function get data from backend with parameter
  getWelcomeMessageWithParam(){
    // console.log(this.welcomeDataService.executeHelloWorldBeanService())
    // console.log("het welcome message")
    this.welcomeDataService.executeHelloWorldServiceWithParam(this.name).subscribe(
    response => this.handelSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
    );
    //console.log('last line of response')
   }


  handelSuccessfulResponse(response){
    //console.log(response)
    //console.log(response.message)
    this.welcomeMessageFromService= response.message

  }

  handleErrorResponse(error){
    //console.log(error)
    //console.log(error.error)
    //console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message
  }

}
