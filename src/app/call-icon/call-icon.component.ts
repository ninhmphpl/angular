import {Component, OnInit} from '@angular/core';
import {environment, errorAlert} from "../../../environment/environments";
import {HttpClient} from "@angular/common/http";
import {CallIcon} from "../../model/CallIcon";
const url = environment.url
@Component({
  selector: 'app-call-icon',
  templateUrl: './call-icon.component.html',
  styleUrls: ['./call-icon.component.scss']
})
export class CallIconComponent implements OnInit{
  callIcons : CallIcon[] = []
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.http.get(url + "/callicon").subscribe((payload : any)=>{
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
