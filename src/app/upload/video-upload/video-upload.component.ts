import {Component, EventEmitter, Input, Output} from '@angular/core';
import {environment, uploadFile} from "../../Environment";
const urlUpload = environment.hostUpload
const urlFolderUpload = environment.urlFolder
@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.scss']
})
export class VideoUploadComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @Input() src: string = "";
  @Input() videoWith: string = "100px";
  @Input() videoHeight: string = "150px";
  url = "";
  sendData(event: any) {
    uploadFile(urlUpload, urlFolderUpload, event.target.files[0], url => {
      this.dataEvent.emit(url);
    })
  }
}
