import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config} from "../model/config";
import {environment} from "../../environment/environments";
import {LoginService} from "../login/login.service";
import {LoginComponent} from "../login/login.component";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config : Config[] = []
  constructor(private http : HttpClient, private loginService : LoginService) { }
  getConfig(){
    this.http.get(environment.url + "/config", this.loginService.getHeader()).subscribe((value : any) => {
      this.config = value
    }, error => {
      alert(error.error.detail)
    })
  }

  save(){
    this.http.post(environment.url + "/config", this.config, this.loginService.getHeader()).subscribe((value : any) => {
      this.config = value
      alert("done")
    }, error => {
      alert(error.error.detail)
    })
  }

  apply(){
    this.http.get(environment.url + "/config/apply", this.loginService.getHeader()).subscribe((value : any) => {
      alert(value.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  configServer(files : any){
    let formData = new FormData()
    let file : File = files.target.files[0]
    formData.append('file', file)
    this.http.post(environment.url + "/config/firebase", formData, this.loginService.getHeader()).subscribe((value : any) => {
      alert(value.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  configClient(files : any){
    let formData = new FormData()
    let file : File = files.target.files[0]
    formData.append('file', file)
    this.http.post(environment.url + "/config/firebase-client", formData, this.loginService.getHeader()).subscribe((value : any) => {
      alert(value.data)
    }, error => {
      alert(error.error.detail)
    })
  }
}
