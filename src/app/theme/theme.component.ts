import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environments";
import {Theme} from "../../model/Theme";
import {Category} from "../../model/Category";
import {Type} from "../../model/Type";

const url = environment.url

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  list: Theme[] = [];
  categories : Category[] = []
  types : Type[] = []
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getList()
    this.getCategoryList()
    this.getType()
  }

  getList() {
    this.http.get(url + "/theme/all").subscribe((data: any) => {
      this.list = data.data
    }, (error: any) => {
      console.log(error)
    })
  }
  getCategoryList(){
    this.http.get(url + "/category").subscribe((data: any) => {
      this.categories = data.data
    }, (error: any) => {
      console.log(error)
    })
  }

  getType(){
    this.http.get(url + "/type").subscribe((payload : any) =>{
      if(payload.code == 200) this.types = payload.data
      else console.log("error code: " + payload.code)
    }, (error : any)=>{
      console.log(error)
    })
  }
  save(theme: any,
       fileAvatar: any,
       fileRingStone: any,
       fileBackground: any,
       fileCallIconDeny: any,
       fileCallIconAccept: any,
       fileCallIconDenyJson: any,
       fileCallIconAcceptJson: any) {
    let body = new FormData();
    if(theme)body.append("theme", JSON.stringify(theme))
    if(fileAvatar && fileAvatar.length > 0)body.append("file_avatar", fileAvatar[0])
    if(fileRingStone && fileRingStone.length > 0)body.append("file_ring_stone", fileRingStone[0])
    if(fileBackground && fileBackground.length > 0)body.append("file_back_ground", fileBackground[0])
    if(fileCallIconDeny && fileCallIconDeny.length > 0)body.append("file_call_icon_deny", fileCallIconDeny[0])
    if(fileCallIconAccept && fileCallIconAccept.length > 0)body.append("file_call_icon_accept", fileCallIconAccept[0])
    if(fileCallIconAcceptJson && fileCallIconAcceptJson.length > 0)body.append("file_call_icon_accept_json", fileCallIconAcceptJson[0])
    if(fileCallIconDenyJson && fileCallIconDenyJson.length > 0)body.append("file_call_icon_deny_json", fileCallIconDenyJson[0])

    console.log(body)
    this.http.post(url + "/theme", body).subscribe((data: any) => {
      if (data.code == 200) this.getList()
    }, (error: any) => {
      console.log(error);
    })
  }
  saveCallIconType(type : any){
    this.http.post(url + "/type", type).subscribe((payload : any)=>{
      if(payload.code == 200) this.getType();
      else console.log("save type error code : " + payload.code)
    }, (error : any)=>{
      console.log(error)
    })
  }

  delete(id: any) {
    this.http.delete(url + "/theme/" + id).subscribe((data: any) => {
      if (data.code == 200) this.getList()
    }, (error: any) => {
      console.log(error)
    })
  }
}
