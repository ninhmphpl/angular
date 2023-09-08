import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment, getHeader} from "./Environment";
import {Type} from "./model/Type";
const urlPatrol = environment.hostPatrol
@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private http : HttpClient) { }
  public getType(listType : (data : Type[])=> any){
    let url = urlPatrol + "/video/type?edit=true"
    this.http.get(url).subscribe((payload : any)=>{
      listType(payload.data)
    }, (error : any)=>{
      alert(JSON.stringify(error.error.detail))
    })
  }

  public save(type : Type, result : (data : Type) => any){
    let url = urlPatrol + "/video/type"
    this.http.post(url, type,getHeader()).subscribe((payload : any)=>{
      result(payload.data)
    }, (error : any)=>{
      alert(JSON.stringify(error.error.detail))
    })
  }

  public delete(type : Type, result : (data : string) => any){
    let url = urlPatrol + "/video/type/" + type.id
    this.http.delete(url,getHeader()).subscribe((payload : any)=>{
      result(payload.data)
    }, (error : any)=>{
      alert(JSON.stringify(error.error.detail))
    })
  }
}
