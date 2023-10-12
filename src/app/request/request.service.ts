import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environments";
import {LoginService} from "../login/login.service";
import {Request} from "../model/request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  request : Request[] = []
  page : number = 0
  totalPages : number = 0
  constructor(private http : HttpClient, private login : LoginService) { }
  get(page : number){
    this.http.get(environment.url + "/security/request-counter?page=" + page, this.login.getHeader()).subscribe((value : any) => {
      this.request = value.data.content
      this.page = value.data.number
      this.totalPages = value.data.totalPages
    }, error => {
      alert(error.error.detail)
    })
  }

}
