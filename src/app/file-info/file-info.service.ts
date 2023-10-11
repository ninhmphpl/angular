import {Injectable} from '@angular/core';
import {FileInfo} from "../model/fileInfo";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environments";
import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class FileInfoService {
  private cutOption: boolean = true
  clipboard: FileInfo[] = []
  backList: string[] = []
  fileInfos: FileInfo[] = []
  selectAll: boolean = false

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  public get(path: string) {
    this.http.get(environment.url + "/file-manager/scan?source_path=" + path, this.loginService.getHeader()).subscribe((value: any) => {
      this.fileInfos = value
      this.backList.push(path)
    }, error => {
      alert(error.error.detail)
    })
  }

  menu(fileElement: MouseEvent, menu: HTMLElement) {
    fileElement.preventDefault() // dont open menu default
    fileElement.stopPropagation() // // Ngăn sự kiện lan ra đến các phần tử cha khác
    menu.style.top = fileElement.y + "px"
    menu.style.left = fileElement.x + "px"
    menu.hidden = false;
  }

  selectAllAction() {
    this.selectAll = !this.selectAll
    for (let i of this.fileInfos) {
      i.select = this.selectAll
    }
  }

  back() {
    if (this.backList.length >= 2) {
      let path = this.backList[this.backList.length - 2]
      this.backList.splice(this.backList.length - 2)
      this.get(path)
    }
  }

  open(i: number) {
    let file = this.fileInfos[i]
    if (file.file) {
      // do something with file
    } else {
      this.get(file.path)
    }
  }
  copy(){
    this.clipboard = []
    for(let i of this.fileInfos){
      this.clipboard.push(i)
    }
    this.cutOption = false
  }

  cut(){
    this.clipboard = []
    for(let i of this.fileInfos){
      this.clipboard.push(i)
    }
    this.cutOption = true
  }

  pate(){
    if(this.cutOption){
      this.http.get(environment.url + `/file-manager/cut?source_path=/ji&destination_path=/fe`)
    }
  }


}
