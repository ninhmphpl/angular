import { Component } from '@angular/core';
import {FirebaseAuthenticationService} from "../firebase-authentication.service";
import {environment} from "../environment";
import {HttpClient} from "@angular/common/http";
const url = environment.url
@Component({
  selector: 'app-login-firebase',
  templateUrl: './login-firebase.component.html',
  styleUrls: ['./login-firebase.component.scss']
})
export class LoginFirebaseComponent {
  token : any;
  constructor(private firebaseAuthenticationService : FirebaseAuthenticationService, private http : HttpClient) {
  }

  login(){
    this.firebaseAuthenticationService.login((token)=>{
      console.log(token)
      this.token = token
      let body = {
        token : token
      }
      this.http.post(url + "/authentication/login", body).subscribe((payload : any)=>{
        console.log(payload)
      }, (error : any)=>{
        console.error(error)
      })
    })
  }
}
