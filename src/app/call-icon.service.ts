import { Injectable } from '@angular/core';
import {environment, errorAlert} from "./environments";
import {HttpClient} from "@angular/common/http";
import {CallIcon} from "../model/CallIcon";

@Injectable({
  providedIn: 'root'
})
export class CallIconService {
  callIcons : CallIcon[] = []
  constructor(private http : HttpClient) { }
  getList(){
    this.http.get(environment.url + "/callicon").subscribe((payload : any)=>{
      if(payload.code == 200){
        this.callIcons = payload.data
      }else {
        errorAlert("Error code : " + payload.code)
      }
    }, (error : any)=>{
      errorAlert( JSON.stringify(error) )
    })
  }
}
