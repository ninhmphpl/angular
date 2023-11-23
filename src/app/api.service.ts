import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileInfo} from "./model/fileInfo";
import {LoginService} from "./login/login.service";
import {environment} from "../environment/environments";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  // =================== Backup =====================
  listFileBackup: FileInfo[] = []
  listTypeBackup: String[] = []
  fileBackupSelect! : string
  typeBackupSelect! : string
  getListFileBackup() {
    this.http.get(environment.url + "/setting/backup/list-file-backup", this.loginService.getHeader()).subscribe(
      (value: any) => this.listFileBackup = value,
      error => alert(error.error.detail))
  }
  getListTypeBackup(){
    this.http.get(environment.url + "/setting/backup/type-list",  this.loginService.getHeader()).subscribe(
      (value: any) => this.listTypeBackup = value,
      error => alert(error.error.detail))
  }
  restoreBackup(){
    this.http.get(environment.url + "/setting/backup/restore?file=" + this.fileBackupSelect + "&type=" + this.typeBackupSelect,  this.loginService.getHeader()).subscribe(
      ()=> alert("done"),
      error => alert(error.error.detail))
  }


}
