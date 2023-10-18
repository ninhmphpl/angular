import {Injectable} from '@angular/core';
import {Source} from "../model/Source";
import {HttpClient} from "@angular/common/http";
import {environment, errorAlert, successAlert} from "../../environment/environments";
import {Theme} from "../model/Theme";
import {Category} from "../model/Category";
import {CallIcon} from "../model/CallIcon";
import {Type} from "../model/Type";
import {LoginService} from "./login/login.service";
import {Background2} from "../model/Background2";

const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  types: Type[] = []
  sourceBackground: Source[] = []
  sourceAvatar: Source[] = []
  sourceCallIcon: Source[] = []
  sourceSticker: Source[] = []
  themes: Theme[] = [];
  categories: Category[] = []
  callIcons: CallIcon[] = []
  limitDefault = 20;

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  get() {
    this.getCategory()
    this.getSourceBackGround()
    this.getSourceAvatar()
    this.getSourceSticker()
    this.getSourceCallIcon()
    this.getCallIconList()
    this.getType()
  }

  getType() {
    this.http.get(environment.url + "/type").subscribe((payload: any) => {
      if (payload.code == 200) this.types = payload.data
    }, (error: any) => {
      errorAlert(error)
    })
  }

  getTheme(page: number, option: string) {
    this.http.get(url + "/theme/" + option + "?page=" + page + "&limit=20").subscribe((data: any) => {
      if (data.code == 200) this.themes = data.data
      else errorAlert("Error code: " + data.code)
    }, (error: any) => {
      errorAlert(error)
    })
  }

  getCategory() {
    this.http.get(url + "/category").subscribe((data: any) => {
      this.categories = data.data
    }, (error: any) => {
      errorAlert(error)
    })
  }

  getCallIconList() {
    this.http.get(url + "/callicon").subscribe((payload: any) => {
      if (payload.code == 200) {
        this.callIcons = payload.data
      } else {
        errorAlert("Error code : " + payload.code)
      }
    }, (error: any) => {
      errorAlert(JSON.stringify(error))
    })
  }

  getSourceBackGround() {
    this.http.get(url + "/theme/source?type=background&edit=true").subscribe((value: any) => {
      console.log(value)
      this.sourceBackground = value.data
    }, error => alert(error.error.detail))
  }

  getSourceCallIcon() {
    this.http.get(url + "/theme/source?type=callIcon&edit=true").subscribe((value: any) => {
      this.sourceCallIcon = value.data
    }, error => alert(error.error.detail))
  }

  getSourceSticker() {
    this.http.get(url + "/theme/source?type=sticker&edit=true").subscribe((value: any) => {
      this.sourceSticker = value.data
    }, error => alert(error.error.detail))
  }

  getSourceAvatar() {
    this.http.get(url + "/theme/source?type=avatar&edit=true").subscribe((value: any) => {
      this.sourceAvatar = value.data
    }, error => alert(error.error.detail))
  }

  getBackground(option: string, background: (background: string[]) => any) {
    this.http.get(url + `/categorybackground/${option}?page=0&limit=100`).subscribe((value: any) => {
      background(value.data)
    }, error => {
      alert(error.error.data)
    })
  }

  getBackground2(page: number, category: string, background: (background: Background2[]) => any) {
    this.http.get(url + `/background?page=${page}&limit=${this.limitDefault}${(category !== 'all') ? '&category=' + background : ''}`).subscribe((value: any) => {
      background(value.data)
    }, error => {
      alert(error.error.data)
    })
  }

  saveTheme(theme: Theme, action: (theme: Theme) => any) {
    this.http.post(url + "/theme", theme, this.loginService.getHeader()).subscribe((payload: any) => {
      if (payload.code == 200) {
        action(payload.data)
        successAlert("OK")
      }
    }, (error: any) => {
      errorAlert(JSON.stringify(error))
    })
  }

  saveCallIcon(callIcon: CallIcon, action: (callIcon: CallIcon) => any) {
    this.http.post(url + "/callicon", callIcon, this.loginService.getHeader()).subscribe((payload: any) => {
      if (payload.code == 200) {
        action(payload.data)
        successAlert("OK")
      } else {
        errorAlert("Error code : " + payload.code)
      }
    }, (error: any) => {
      errorAlert(JSON.stringify(error))
    })
  }

  saveType(type: Type, action: (type: Type) => any) {
    this.http.post(environment.url + "/type", type, this.loginService.getHeader()).subscribe((payload: any) => {
      if (payload.code == 200) action(payload.data)
      else errorAlert("save type error code : " + payload.code)
    }, (error: any) => {
      errorAlert(error)
    })
  }

  saveCategory(category: Category, action: (category: Category) => any) {
    this.http.post(url + "/category", category, this.loginService.getHeader()).subscribe((payload: any) => {
      if (payload.code == 200) {
        action(payload.data)
        successAlert("Ok")
      } else {
        errorAlert(JSON.stringify(payload))
      }
    }, (error: any) => {
      console.log(error.error.detail)
    })
  }

  saveSource(source: Source, action: (source: Source) => any) {
    console.log(source)
    this.http.post(url + "/theme/source", source, this.loginService.getHeader()).subscribe((payload: any) => {
      if (payload.code == 200) {
        action(payload.data)
        successAlert("Ok")
      } else {
        errorAlert(JSON.stringify(payload))
      }
    }, (error: any) => {
      alert(error.error.detail)
    })
  }

  saveBackground2(background2: Background2, action: (background2: Background2) => any) {
    console.log(background2)
    this.http.post(url + "/background", background2, this.loginService.getHeader()).subscribe((payload: any) => {
      action(payload.data)
      successAlert("Ok")
    }, (error: any) => {
      alert(error.error.detail)
    })
  }

  deleteTheme(theme: Theme, action: () => any) {
    this.http.delete(url + "/theme/" + theme.id, this.loginService.getHeader()).subscribe((data: any) => {
      if (data.code == 200) {
        action()
        successAlert("Ok")
      }
    }, (error: any) => {
      errorAlert(error.error.detail)
    })
  }

  deleteCallIcon(callIcon: CallIcon, action: () => any) {
    this.http.delete(url + "/callicon/" + callIcon.id, this.loginService.getHeader()).subscribe((payload: any) => {
      if (payload.code === 200) {
        action()
      }
    }, (error: any) => {
      errorAlert(JSON.stringify(error.error.detail))
    })
  }

  deleteCategory(category: Category, action: () => any) {
    this.http.delete(url + "/category/" + category.id, this.loginService.getHeader()).subscribe((payload: any) => {
      if (payload.code == 200) action()
    }, (error: any) => {
      console.log(error)
    })
  }

  deleteSource(category: Source, action: () => any) {
    this.http.delete(url + "/theme/source?url=" + category.url, this.loginService.getHeader()).subscribe((payload: any) => {
      if (payload.code == 200) action()
    }, (error: any) => {
      console.log(error)
    })
  }

  deleteBackground2(background2: Background2, action: () => any) {
    this.http.delete(url + "/background/" + background2.id, this.loginService.getHeader()).subscribe((payload: any) => {
      if (payload.code == 200) action()
    }, (error: any) => {
      console.log(error)
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
