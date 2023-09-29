import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Project} from "../model/Project";
import {LoginInfo} from "../model/LoginInfo";
import {LoginResult} from "../model/LoginResult";
import {environment} from "../environments/environment";
const url = "http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) {}

  login(loginInfo : LoginInfo, loginResult : (loginResult : LoginResult)=> any){
    this.http.post(url + "/login", loginInfo).subscribe((value : any) => loginResult(value),
      error => alert(error.error.detail))
  }
  getListProject(listProject : (project : Project[])=> any){
    this.http.get(url + "/list-project").subscribe((value : any) => listProject(value),
        error => alert(error.error.detail))
  }
  getListProjectDetail(listProject : (project : Project[])=> any){
    this.http.get(url + "/list-project", this.getHeader()).subscribe((value : any) => listProject(value),
      error => alert(error.error.detail))
  }
  getHeader(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem(environment.tokensStorage)??""
      })
    };
  }

}
