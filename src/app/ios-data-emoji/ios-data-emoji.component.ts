import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {deleteAlert, environment, errorAlert} from "../environments";
import {IosDataEmoji} from "../../model/IosDataEmoji";
import {Router} from "@angular/router";
import {IosIcon} from "../../model/IosIcon";
const url = environment.urlEmoji

@Component({
  selector: 'app-ios-data-emoji',
  templateUrl: './ios-data-emoji.component.html',
  styleUrls: ['./ios-data-emoji.component.scss']
})
export class IosDataEmojiComponent implements OnInit{
  iosDataEmojis : IosDataEmoji[] = []
  iosIcons : IosIcon[] = []
  formCreate : IosDataEmoji = {
    id : null,
    createdAt : null,
    emoji : null,
    unicode1 : null,
    unicode2 : null,
    unicode3 : null,
    unicode4 : null,
    unicode5 : null,
    text : null,
    lever : null,
  }
  option : any;
  elementTag : any;

  constructor(private http : HttpClient,
              private router : Router) {
  }
  ngOnInit(): void {
    this.getToken()
    this.getListIcon()
    this.getList()
  }

  getList(){
    this.http.get(url + "/ios/data-emoji").subscribe((payload : any)=>{
      if(payload.code == 200) this.iosDataEmojis = payload.data
      else {
        errorAlert("Error code: " + payload.code)
        if(confirm("Back to login")) this.router.navigate(["/login"])
      }
    }, (error : any)=>{
      errorAlert(JSON.stringify(error))
      if(confirm("Back to login")) this.router.navigate(["/login"])
    })
  }
  getListIcon() {
    this.http.get(url + "/ios/icon").subscribe((payload: any) => {
      if (payload.code == 200) this.iosIcons = payload.data
      else {
        errorAlert("Error code " + payload.code + ", will back login")
        this.router.navigate(['/login'])
      }
    }, (error: any) => {
      errorAlert(JSON.stringify(error))
    })
  }
  getToken() {
    let token: any = localStorage.getItem("Prox-Token")
    if (!token) {
      this.router.navigate(["/login"])
      return
    }
    this.option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
  }

  save(iosDataEmoji : IosDataEmoji){
    console.log(iosDataEmoji)
    this.http.post(url + "/ios/data-emoji", iosDataEmoji, this.option).subscribe((payload : any)=>{
      if(payload.code == 200) this.getList()
      else {
        errorAlert("Error code: " + payload.code)
        if(confirm("Back to login")) this.router.navigate(["/login"])
      }
    },(error : any)=>{
      errorAlert(JSON.stringify(error))
      if(confirm("Back to login")) this.router.navigate(["/login"])
    })
  }
  delete(id : any){
    deleteAlert(()=>{
      this.http.delete(url + "/ios/data-emoji/" + id, this.option).subscribe((payload : any)=>{
        if(payload.code == 200) this.getList()
        else {
          errorAlert("Error code: " + payload.code)
          if(confirm("Back to login")) this.router.navigate(["/login"])
        }
      },(error : any)=>{
        errorAlert(JSON.stringify(error))
        if(confirm("Back to login")) this.router.navigate(["/login"])
      })
    })

  }
}
