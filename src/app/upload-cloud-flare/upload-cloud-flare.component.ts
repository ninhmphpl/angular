import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UploadCloudFlareService} from "./upload-cloud-flare.service";



@Component({
  selector: 'app-upload-cloud-flare',
  templateUrl: './upload-cloud-flare.component.html',
  styleUrls: ['./upload-cloud-flare.component.scss']
})
export class UploadCloudFlareComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @Input() img!: string;
  @Input() type: string = 'img';
  @Input() imgWith: string = "50px";
  @Input() imgHeight: string = "50px";
  @Input() placeHolder: string = "";
  urlDefault = "https://th.bing.com/th/id/OIP.VH7cg73Iesjoi9lvFyirCgHaHa?pid=ImgDet&rs=1"
  constructor(private uploadService: UploadCloudFlareService) {
  }
  sendData(event: any) {
    this.uploadService.upload(event.target.files[0], url => this.dataEvent.emit(url))
  }
}

