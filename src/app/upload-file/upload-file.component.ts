import {Component, OnInit} from '@angular/core';
import {Status, uploadFile} from "../../lib/upload.socket";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  uploadFile: any;


  ngOnInit(): void {
  }

  uploadFileFunction(event: any) {
    const file: File = event.target.files[0];
    // let url = "ws://52.54.246.154:8080/upload"
    let url = "ws://localhost:8080/upload"
    this.uploadFile = uploadFile(file,url, "test",(data : string)=>{
      alert(data)
    })
  }

  // soket() {
  //   sockets.onopen = () => {
  //     console.log("WebSocket connection opened.");
  //     const buffer = new ArrayBuffer(10);
  //     sockets.send(buffer)
  //   };
  //
  //   sockets.onmessage = function (event) {
  //     console.log("Received message: " + event.data);
  //   };
  //
  //
  //   sockets.onclose = function () {
  //     console.log("WebSocket connection closed.");
  //   };
  //
  //   sockets.onerror = function (event) {
  //     console.error("WebSocket error:", event);
  //   };
  // }

}
