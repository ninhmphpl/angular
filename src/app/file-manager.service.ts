import {ElementRef, Injectable, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment, errorAlert, successAlert, uploadFile} from "../environment/Environmen";
import {FileData} from "../model/FileData";
import {Breadcrumb} from "../model/Breadcrumb";
const host = environment.url
@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  listFile: FileData[] = []
  breadcrumb: Breadcrumb[] = []
  fileSelect: FileData[] = [];
  clipBoard: { file: FileData[], action: string } = {file: [], action: "copy"}
  processUpload : {name : string, percent : number, urlDownload : string}[] = []

  constructor(private http: HttpClient) {
  }
  getList(path: string, listFile: () => any) {
    console.log("GET " + path)
    this.http.get(path).subscribe((payload: any) => {
      if (payload.code == 200) {
        this.listFile = payload.data
        listFile()
      } else errorAlert("Error code " + payload.code)
    }, (error: any) => {
      errorAlert(JSON.stringify(error))
    })
  }
  openFile(fileData?: FileData, imgView? : HTMLImageElement) {
    this.fileSelect = []
    if (fileData) {
      if (fileData.type === "folder") {
        this.breadcrumb.push(new Breadcrumb(fileData.name, fileData.path))
        this.getList(fileData.path, ()=>{})
      }else if(['png', 'img', 'jpeg', 'gif', 'webp'].indexOf(fileData.type) != -1){
        if(imgView)imgView.src = fileData.path
        document.getElementById("buttonImgView")?.click()
      }else {
        window.location = fileData.path
      }
    }
  }
  openFolderBreadcrumb(indexBreadcrumb: number) {
    if (indexBreadcrumb && indexBreadcrumb >= this.breadcrumb.length) console.error("Breadcrumb error index " + indexBreadcrumb)
    let breadcrumb = this.breadcrumb[indexBreadcrumb]
    this.getList(breadcrumb.url, () => {
      this.breadcrumb = this.breadcrumb.slice(0, indexBreadcrumb + 1)
    })
  }
  back() {
    if (this.breadcrumb.length > 1) {
      this.breadcrumb.pop()
      let breadcrumb = this.breadcrumb[this.breadcrumb.length - 1]
      this.getList(breadcrumb.url, () => {
      })
    }
  }
  menu(fileElement: MouseEvent, menu: HTMLElement) {
    fileElement.preventDefault() // dont open menu default
    fileElement.stopPropagation() // // Ngăn sự kiện lan ra đến các phần tử cha khác
    menu.style.top = fileElement.y + "px"
    menu.style.left = fileElement.x + "px"
    menu.hidden = false;

  }
  action(option: string, value2? : string) {
    let breadcrumbUrl = this.breadcrumb[this.breadcrumb.length - 1].url
    let fileAction : FileData[];
    if (option === 'copy' || option === 'cut') {
      value2 = breadcrumbUrl;
      fileAction = this.clipBoard.file
    }else {
      fileAction = this.fileSelect
    }
    for (let fileData of fileAction) {
      let url = `${breadcrumbUrl}&option=${option}${fileData.path ? '&value1=' + fileData.path : ''}${value2 ? '&value2=' + value2 : ''}`
      console.log("POST " + url)
      this.http.post(url, {}).subscribe((payload: any) => {
        if (payload.code == 200) {
          if (payload.data.status) {
            this.getList(payload.data.urlFolder, () => {
            })
            successAlert(payload.data.resut)
            if (option === 'cut') this.clipBoard.file = []
          } else errorAlert(payload.data.result)
        } else {
          errorAlert(JSON.stringify(payload))
        }
      })
    }
  }
  clipBoardAction(action: string) {
    this.clipBoard.action = action
    if (this.fileSelect != null) {
      this.clipBoard.file = this.fileSelect
    }
  }
  push(fileData: FileData) {
    if (this.fileSelect.indexOf(fileData) != -1) return
    console.log('>>> Select new file ' + fileData.name)
    this.fileSelect.push(fileData)
  }
  uploadFileSocket(files : FileList | null){
    let breadcrumbUrl = this.breadcrumb[this.breadcrumb.length - 1].url
    let url = host.replace("http","ws") + "/upload"
    if(files && files.length > 0){
      for(let i = 0; i < files.length ; i++){
        this.processUpload.push({name : files[i].name, percent : 0, urlDownload : ""})
        uploadFile(url, breadcrumbUrl, files[i], (urlDownload : string)=>{
          this.processUpload[i].urlDownload = urlDownload
          this.getList(breadcrumbUrl, ()=>{})
        }, (percent : number)=>{
          this.processUpload[i].percent = percent
        })
      }
    }
  }
}
