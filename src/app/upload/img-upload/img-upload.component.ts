import {Component, EventEmitter, Input, Output} from '@angular/core';
import {environment, uploadFile} from "../../Environment";

const urlUpload = environment.hostUpload
const urlFolderUpload = environment.urlFolder

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @Input() img: string = "";
  @Input() imgWith: string = "100px";
  @Input() imgHeight: string = "100px";
  url = "";
  sendData(event: any) {
    uploadFile(urlUpload, urlFolderUpload, event.target.files[0], url => {
      this.dataEvent.emit(url);
    })
  }


}
