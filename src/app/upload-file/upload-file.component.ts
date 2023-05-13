import {Component, OnInit} from '@angular/core';
import {uploadFile} from "../upload.socket";

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
    let url = "ws://localhost:8080/upload"
    uploadFile(file,url, "test",(data : any)=>{
      console.log(data)
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
