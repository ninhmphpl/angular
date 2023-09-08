import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../Environment";

const urlPatrol = environment.hostPatrol
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email = "";
  password = "";

  constructor(private http : HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    localStorage.removeItem(environment.keySaveToken)
  }

  submit() {
    let url = urlPatrol + "/system/login"
    this.http.post(url, {email : this.email, password : this.password}).subscribe((payload : any)=>{
      if(payload.code === 200) localStorage.setItem(environment.keySaveToken, payload.data)
      console.log("Login Success")
      this.router.navigate(["/video"])
    }, (error : any)=>{
      console.log(error)
      alert(error.error.detail)
    })
  }

}
