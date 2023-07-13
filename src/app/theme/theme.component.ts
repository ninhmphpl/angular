import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {deleteAlert, environment, errorAlert, successAlert} from "../../../environment/environments";
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
      if(data.code == 200)this.list = data.data
      else errorAlert("Error code: " + data.code)
    }, (error: any) => {
      errorAlert(error)
    })
  }
  getCategoryList(){
    this.http.get(url + "/category").subscribe((data: any) => {
      this.categories = data.data
    }, (error: any) => {
      errorAlert(error)
    })
  }

  getType(){
    this.http.get(url + "/type").subscribe((payload : any) =>{
      if(payload.code == 200) this.types = payload.data
      else errorAlert("error code: " + payload.code)
    }, (error : any)=>{
      errorAlert(error)
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
    this.http.post(url + "/theme", body).subscribe((data: any) => {
      if (data.code == 200){
        successAlert("Ok")
        this.getList()
      }
    }, (error: any) => {
      errorAlert(error);
    })
  }
  saveCallIconType(type : any){
    this.http.post(url + "/type", type).subscribe((payload : any)=>{
      if(payload.code == 200) this.getType();
      else errorAlert("save type error code : " + payload.code)
    }, (error : any)=>{
      errorAlert(error)
    })
  }

  delete(id: any) {
    deleteAlert(()=>{
      this.http.delete(url + "/theme/" + id).subscribe((data: any) => {
        if (data.code == 200){
          this.getList()
          successAlert("Ok")
        }
        else errorAlert("Error code: " + data.code)
      }, (error: any) => {
        errorAlert(error)
      })
    })
  }

  isImage(url: string): boolean {
    const fileExtension = url.split('.').pop()!.toLowerCase();
    return ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].indexOf(fileExtension) !== -1;
  }

  isVideo(url: string): boolean {
    const fileExtension = url.split('.').pop()!.toLowerCase();
    return ['mp4', 'webm', 'avi', 'mov', 'wmv', 'flv', 'mkv'].indexOf(fileExtension) !== -1;
  }
}
