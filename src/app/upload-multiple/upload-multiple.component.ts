import {Component, EventEmitter, Input, Output} from '@angular/core';
import {environment} from "../environment";
import {uploadFile} from "../img-upload/img-upload.component";


@Component({
  selector: 'app-upload-multiple',
  templateUrl: './upload-multiple.component.html',
  styleUrls: ['./upload-multiple.component.scss']
})
export class UploadMultipleComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @Output() uploadDone = new EventEmitter<string[]>();
  @Input() path : string = '';
  @Input() buttonName : string = 'button';
  urlSocket = environment.url.replace("http", "ws") + "/upload"
  percent : number = 0;
  numberUpload = 0
  numberUploadDone = 0
  sendData(fileList: FileList | null) {
    this.numberUploadDone = 0
    if (!fileList) return
    this.numberUpload = fileList.length
    let listUrl : string[] = []
    for (let i = 0 ; i < fileList.length ; i ++){
      let file = fileList.item(i);
      if(file){
        uploadFile(file, this.urlSocket, this.path, url => {
          this.numberUploadDone ++
          this.dataEvent.emit(url)
          listUrl.push(url)
          if(this.numberUpload <= this.numberUploadDone){
            this.uploadDone.emit(listUrl);
          }
        }, data => {
          this.percent = data
          if(this.percent === 100) this.percent = 0
        })
      }
    }
  }
}
