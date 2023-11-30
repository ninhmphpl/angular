import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-upload-ftp',
  templateUrl: './upload-ftp.component.html',
  styleUrls: ['./upload-ftp.component.scss']
})
export class UploadFtpComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @Input() img!: string;
  @Input() type : string = 'img';
  @Input() imgWith: string = "50px";
  @Input() imgHeight: string = "50px";
  @Input() path : string = '';
  urlDefault = "https://th.bing.com/th/id/OIP.VH7cg73Iesjoi9lvFyirCgHaHa?pid=ImgDet&rs=1"
  constructor(private http : HttpClient, private login : LoginService) {
  }
  sendData(event : any){
    let files = event.target.files;
    if(files){
      let file = files.item(0);
      if(file){
        let data = new FormData()
        data.append("file",file )
        this.http.post(environment.url + "/file-manager/upload-ftp", data, this.login.getHeader()).subscribe((value:any) => {
            this.dataEvent.emit(value.data)
        })
      }
    }
  }

}
