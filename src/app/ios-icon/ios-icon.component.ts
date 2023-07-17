import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment, errorAlert} from "../environments";
import {IosIcon} from "../../model/IosIcon";
import {Router} from "@angular/router";
import {uploadFile} from "../../lib/upload.socket";

const url = environment.urlEmoji
const urlUpload = environment.urlUpload2

@Component({
  selector: 'app-ios-icon',
  templateUrl: './ios-icon.component.html',
  styleUrls: ['./ios-icon.component.scss']
})
export class IosIconComponent implements OnInit {
  iosIcons: IosIcon[] = []
  option: any;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getToken()
    this.getList()
  }

  getList() {
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
  upload(files : any){
    if(files && files.length > 0){
      for(let file of files){
        uploadFile(file,urlUpload.replace("http", "ws") + "/upload2", "ios_icon_emoji", (urlDownload : any)=>{
          console.log(urlDownload)
          let iosIcon : IosIcon= {url : urlDownload, id : null}
          this.save(iosIcon)
        })
      }
    }
  }

  save(iosIcon: IosIcon) {
    this.http.post(url + "/ios/icon", iosIcon, this.option).subscribe((payload: any) => {
      if (payload.code == 200) this.getList()
      else{
        errorAlert("Error code " + payload.code)
        this.router.navigate(["/login"])
      }}, (error : any)=>{
      errorAlert(JSON.stringify(error))
    })
  }

  delete(id : number){
    this.http.delete(url + "/ios/icon/" + id, this.option).subscribe((payload : any)=>{
      if(payload.code == 200){

        this.getList()
      }
      else {
        errorAlert("Error code : " + payload.code)
        this.router.navigate(["/login"])
      }
    }, (error: any)=>{
      errorAlert(JSON.stringify(error))
    })
  }


}
