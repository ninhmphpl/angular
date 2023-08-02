import { Injectable } from '@angular/core';
import {environment, errorAlert} from "../../environment/environments";
import {HttpClient} from "@angular/common/http";
import {Type} from "../model/Type";

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  types : Type[] = []
  constructor(private http : HttpClient) { }
  getType() {
    this.http.get(environment.url + "/type").subscribe((payload: any) => {
      if (payload.code == 200) this.types = payload.data
      else errorAlert("error code: " + payload.code)
    }, (error: any) => {
      errorAlert(error)
    })
  }
  saveCallIconType(type: any) {
    this.http.post(environment.url + "/type", type).subscribe((payload: any) => {
      if (payload.code == 200) this.getType();
      else errorAlert("save type error code : " + payload.code)
    }, (error: any) => {
      errorAlert(error)
    })
  }
}
