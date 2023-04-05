import {Component} from '@angular/core';
import {APIService} from "../service/api.service";
import {environment, errorAlert, successAlert} from "../environments";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: any;
  password: any;

  constructor(private api: APIService,
              private router: Router) {
  }

  submit() {
    let url = environment.host + "/api/login"
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
          this.router.navigate(["/"])
        } else {
          errorAlert(data.data.name)
        }
      })
  }
}
