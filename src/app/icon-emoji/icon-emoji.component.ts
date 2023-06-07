import {Component, OnInit} from '@angular/core';
import {environment, errorAlert, successAlert} from "../environments";
import {uploadFile} from "../../lib/upload.socket";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-icon-emoji',
  templateUrl: './icon-emoji.component.html',
  styleUrls: ['./icon-emoji.component.scss']
})
export class IconEmojiComponent implements OnInit {
  urlEmoji: any;
  urlUpload: any;
  option: any;
  icons : any;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    let token: any = localStorage.getItem("Prox-Token")
    if (!token) {
      this.router.navigate(["/login"]);
      return;
    }
    this.option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
    this.urlEmoji = environment.urlEmoji;
    this.urlUpload = environment.urlUpload;
    this.getList()
  }
  getList(){
    let url = this.urlEmoji + '/dataemoji/list/icon';
    this.http.get(url, this.option).subscribe((data : any)=>{
      this.icons = data.data;
    }, (error : any)=>{
      errorAlert("Error")
    })
  }

  create(groupName: string, files: any) {
    let fileSave: string[] = [];
    for (let i = 0 ; i < files.length ; i ++) {
      let file : any = files.item(i);
      uploadFile(file, this.urlUpload + '/upload', "icon_emoji", (urlDownload: string) => {
        fileSave.push(urlDownload);
        if (fileSave.length == files.length) {
          let url = this.urlEmoji + '/dataemoji/list/icon';
          let body = {
            group: groupName,
            data: fileSave
          }
          this.http.post(url, body, this.option)
            .subscribe((data: any) => {
              successAlert("Update Complete")
              this.getList();
            }, (error : any) =>{
              errorAlert("Update Error")
            })
        }
      })
    }
  }
}
