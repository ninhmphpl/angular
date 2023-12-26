import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UploadCloudFlareService} from "../upload-cloud-flare/upload-cloud-flare.service";


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
  numberUpload = 0
  numberUploadDone = 0

  constructor(private uploadService : UploadCloudFlareService) {
  }
  sendData(fileList: FileList | null) {
    if (!fileList) return
    let listDone : string[] = []
    this.numberUpload = fileList.length
    for (let i = 0 ; i < fileList.length ; i ++){
      let file = fileList.item(i);
      if(file){
        this.uploadService.upload(file, url => {
          listDone.push(url)
          this.numberUploadDone ++
          this.dataEvent.emit(url)
          if(this.numberUpload == this.numberUploadDone){
            this.uploadDone.emit(listDone);
          }
        })
      }
    }
  }
}
