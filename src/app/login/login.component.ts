import {Component, OnInit} from '@angular/core';
import {APIService} from "../service/api.service";
import {environment, errorAlert, successAlert} from "../environments";
import {HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username: any;
  password: any;
  remember : boolean = false
  url : any


  constructor(private api: APIService,
              private router: Router) {
  }

  ngOnInit(): void {
    localStorage.removeItem("Prox-Token")
    let user : any = localStorage.getItem("Prox-username-password")
    if(user){
      user = user.split(",")
      this.username = user[0]
      this.password = user[1]
      this.remember = user[2]
    }
    // lấy biến môi trường
      this.url = environment.urlEmoji
  }

  submit() {
    let url = this.url + "/api/login"
    this.api.postMapping(url,
      {},
      {
        params: new HttpParams()
          .append("username", this.username)
          .append("password", this.password)
      },
      (data: any) => {
        if (data.code === 200) {
          localStorage.setItem("Prox-Token", data.data)
          successAlert("Complete")
          if(this.remember) {
            localStorage.setItem("Prox-username-password", this.username + "," + this.password + "," + this.remember)
          }else{
            localStorage.removeItem("Prox-username-password")
          }
          this.router.navigate(["/"])
        } else {
          errorAlert(data.data.name)
        }
      })
  }
}
