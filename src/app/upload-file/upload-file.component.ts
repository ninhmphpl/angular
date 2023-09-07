import {Component, OnInit} from '@angular/core';
import {uploadFile} from "../../lib/upload.socket";

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
    uploadFile(file,url, "abc/home",(data : string)=>{
      console.log("file" + data)
    }, (per : number)=>{
      console.log("percent" + per)
    })
  }


}
