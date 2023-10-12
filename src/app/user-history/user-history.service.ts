import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login/login.service";
import {History} from "../model/history";
import {environment} from "../../environment/environments";

@Injectable({
  providedIn: 'root'
})
export class UserHistoryService {
  history : History[] = []
  page : number = 0
  totalPages : number = 0
  constructor(private http : HttpClient, private login : LoginService) { }
  get(page : number){
    this.http.get(environment.url + '/security/user-history?page=' + page, this.login.getHeader()).subscribe((value : any) => {
      this.history = value.data.content
      this.page = value.data.number
      this.totalPages = value.data.totalPages
    }, error => {
      alert(error.error.detail)
    })
  }



}
