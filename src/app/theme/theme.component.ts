import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {deleteAlert, environment, errorAlert, successAlert} from "../../../environment/environments";
import {Theme} from "../../model/Theme";
import {Category} from "../../model/Category";
import {Type} from "../../model/Type";
import {uploadFile} from "../../../environment/upload.socket";
import {CallIconService} from "../call-icon.service";

const url = environment.url
const urlUploadFile = environment.url.replace("http", "ws") + '/upload'

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  selectIndex: number | null = null;
  themes: Theme[] = [];
  categories: Category[] = []
  types: Type[] = []
  formCreate: Theme = {
    id: null,
    name: null,
    backGround: null,
    category: null,
    avatar: null,
    note: null,
    title: null,
    ringstone_url: null,
    call_icon: {
      id: null,
      accept: null,
      deny: null,
      acceptJson: null,
      denyJson: null,
      type: null
    },
    top: false,
    lock: false,
    priority: 0,
  };

  constructor(private http: HttpClient, public callIconService: CallIconService) {
  }

  ngOnInit(): void {
    this.callIconService.getList()
    this.getList()
    this.getCategoryList()
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

  uploadAvatar(files: FileList | null, index: number) {
    if (files && files.length > 0) {
      uploadFile(files[0], urlUploadFile, "", (urlDownload: any) => {
        this.themes[index].avatar = urlDownload;
        this.save(index)
      })
    }
  }

  uploadBackGround(files: FileList | null, index: number) {
    if (files && files.length > 0) {
      uploadFile(files[0], urlUploadFile, "", (urlDownload: any) => {
        this.themes[index].backGround = urlDownload;
        this.save(index)
      })
    }
  }

  uploadRingStones(files: FileList | null, index: number) {
    if (files && files.length > 0) {
      uploadFile(files[0], urlUploadFile, "", (urlDownload: any) => {
        this.themes[index].ringstone_url = urlDownload;
        this.save(index)
      })
    }
  }

  save(index: number | null) {
    console.log(index)
    if (index) {
      console.log(this.themes[index])
    }
    this.http.post(url + "/theme", (index != null) ? this.themes[index] : this.formCreate).subscribe((payload: any) => {
      if (payload.code == 200) {
        if (index != null) {
          this.themes[index] = payload.data
          console.log(this.themes[index])
        } else {
          this.themes.unshift(payload.data)
          console.log(this.themes[0])
        }
        successAlert("OK")
      } else {
        errorAlert("Error code: " + payload.code)
      }
    }, (error: any) => {
      errorAlert(JSON.stringify(error))
    })
  }


  delete(index: any) {
    deleteAlert(() => {
      this.http.delete(url + "/theme/" + this.themes[index].id).subscribe((data: any) => {
        if (data.code == 200) {
          this.themes.splice(index, 1)
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

  uploadIcon(indexCallIcon: number) {
    if (this.selectIndex) {
      this.themes[this.selectIndex].call_icon = this.callIconService.callIcons[indexCallIcon];
      this.save(this.selectIndex)
    }
  }
}
