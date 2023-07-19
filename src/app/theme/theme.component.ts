import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {deleteAlert, environment, errorAlert, successAlert} from "../../../environment/environments";
import {Theme} from "../../model/Theme";
import {Category} from "../../model/Category";
import {Type} from "../../model/Type";
import {uploadFile} from "../../../environment/upload.socket";

const url = environment.url
const urlUploadFile = environment.urlUploadFileSocket + '/upload2'

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  themes: Theme[] = [];
  categories: Category[] = []
  types: Type[] = []
  formCreate : Theme = {
    id : null,
    name : null,
    backGround : null,
    category : null,
    avatar : null,
    note : null,
    title : null,
    ringstone_url : null,
    call_icon : {
      id : null,
      accept : null,
      deny : null,
      acceptJson : null,
      denyJson : null,
      type : null
    },
    top : false,
    lock : false,
    priority : 0,
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getList()
    this.getCategoryList()
    this.getType()
  }

  getList() {
    this.http.get(url + "/theme/all").subscribe((data: any) => {
      if (data.code == 200) this.themes = data.data
      else errorAlert("Error code: " + data.code)
    }, (error: any) => {
      errorAlert(error)
    })
  }

  getCategoryList() {
    this.http.get(url + "/category").subscribe((data: any) => {
      this.categories = data.data
    }, (error: any) => {
      errorAlert(error)
    })
  }

  getType() {
    this.http.get(url + "/type").subscribe((payload: any) => {
      if (payload.code == 200) this.types = payload.data
      else errorAlert("error code: " + payload.code)
    }, (error: any) => {
      errorAlert(error)
    })
  }

  save(theme: Theme,
       fileAvatar: any,
       fileRingStone: any,
       fileBackground: any,
       fileCallIconDeny: any,
       fileCallIconAccept: any,
       fileCallIconDenyJson: any,
       fileCallIconAcceptJson: any) {
    let process = 0;
    if (fileAvatar && fileAvatar.length > 0) {
      process++;
      uploadFile(fileAvatar[0], urlUploadFile, "theme_color_file", (urlDownload: any) => {
        theme.avatar = urlDownload;
        if (--process == 0) this.saveTheme(theme)
      })
    }
    if (fileRingStone && fileRingStone.length > 0) {
      process++;
      uploadFile(fileRingStone[0], urlUploadFile, "theme_color_file", (urlDownload: any) => {
        theme.ringstone_url = urlDownload;
        if (--process == 0) this.saveTheme(theme)
      })
    }
    if (fileBackground && fileBackground.length > 0) {
      process++;
      uploadFile(fileBackground[0], urlUploadFile, "theme_color_file", (urlDownload: any) => {
        theme.backGround = urlDownload;
        if (--process == 0) this.saveTheme(theme)
      })
    }
    if (fileCallIconDeny && fileCallIconDeny.length > 0) {
      process++;
      uploadFile(fileCallIconDeny[0], urlUploadFile, "theme_color_file", (urlDownload: any) => {
        theme.call_icon.deny = urlDownload;
        if (--process == 0) this.saveTheme(theme)
      })
    }
    if (fileCallIconAccept && fileCallIconAccept.length > 0) {
      process++;
      uploadFile(fileCallIconAccept[0], urlUploadFile, "theme_color_file", (urlDownload: any) => {
        theme.call_icon.accept = urlDownload;
        if (--process == 0) this.saveTheme(theme)
      })
    }
    if (fileCallIconAcceptJson && fileCallIconAcceptJson.length > 0) {
      process++;
      uploadFile(fileCallIconAcceptJson[0], urlUploadFile, "theme_color_file", (urlDownload: any) => {
        theme.call_icon.acceptJson = urlDownload;
        if (--process == 0) this.saveTheme(theme)
      })
    }
    if (fileCallIconDenyJson && fileCallIconDenyJson.length > 0) {
      process++;
      uploadFile(fileCallIconDenyJson[0], urlUploadFile, "theme_color_file", (urlDownload: any) => {
        theme.call_icon.denyJson = urlDownload;
        if (--process == 0) this.saveTheme(theme)
      })
    }
    if(process == 0){
      this.saveTheme(theme)
    }
  }

  saveTheme(theme: Theme) {
    let cValue = 0;
    for(let c of this.categories){
      if(theme.category === c.category){
        cValue = c.priority * 100
      }
    }
    this.http.post(url + "/theme", theme).subscribe((payload: any) => {
      let i = -1;
      if (payload.code == 200) {
        for(let j = 0; j <  this.themes.length; j++ ){
          if(this.themes[j].id === payload.data.id){
            i = j
            break
          }
        }
        if(i === -1) this.themes.push(payload.data)
        else this.themes[i] = payload.data
        successAlert("Ok")
      }
    }, (error: any) => {
      errorAlert(error);
    })
  }

  saveCallIconType(type: any) {
    this.http.post(url + "/type", type).subscribe((payload: any) => {
      if (payload.code == 200) this.getType();
      else errorAlert("save type error code : " + payload.code)
    }, (error: any) => {
      errorAlert(error)
    })
  }

  delete(id: any) {
    deleteAlert(() => {
      this.http.delete(url + "/theme/" + id).subscribe((data: any) => {
        if (data.code == 200) {
          this.getList()
          successAlert("Ok")
        } else errorAlert("Error code: " + data.code)
      }, (error: any) => {
        errorAlert(error)
      })
    })
  }

  isImage(url: string): boolean {
    if (url == null) return false;
    const fileExtension = url.split('.').pop()!.toLowerCase();
    return ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].indexOf(fileExtension) !== -1;
  }

  isVideo(url: string): boolean {
    if (url == null) return false;
    const fileExtension = url.split('.').pop()!.toLowerCase();
    return ['mp4', 'webm', 'avi', 'mov', 'wmv', 'flv', 'mkv'].indexOf(fileExtension) !== -1;
  }
}
