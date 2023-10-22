import {Component, EventEmitter, Input, Output} from '@angular/core';
import {environment} from "../../environment";

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @Input() img!: string;
  @Input() type : string = 'img';
  @Input() imgWith: string = "100px";
  @Input() imgHeight: string = "100px";
  @Input() path : string = '';
  urlSocket = environment.url.replace("http", "ws") + "/upload"
  urlDefault = "https://th.bing.com/th/id/OIP.VH7cg73Iesjoi9lvFyirCgHaHa?pid=ImgDet&rs=1"
  percent : number = 0;
  sendData(event: any) {
    this.uploadFile(event.target.files[0], this.urlSocket, this.path, url => {
      this.dataEvent.emit(url);
    }, data => {
      this.percent = data
      if(this.percent === 100) this.percent = 0
    })
  }
  uploadFile(file: File, url: string, path: string, action: (url: string) => any, percentAction?: (data: number) => any) {
    const chunkSize = 1024 * 7; // Size of each piece of data (1 MB)
    const totalChunks = Math.ceil(file.size / chunkSize); // data total
    let fileType = file.name.split('.').pop()
    let currentChunk = 0; // number percent downloaded
    let sockets = new WebSocket(url + `?path=${path}&type=${fileType}&size=${file.size}`);
    sockets.onopen = () => {
      console.log("connected")
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const data: ArrayBuffer = event.target.result;
        sockets.send(data);
        currentChunk++;
        if (currentChunk < totalChunks) {
          // If you haven't uploaded all the data yet, continue to upload the next part
          const start = currentChunk * chunkSize;
          const end = Math.min(start + chunkSize, file.size);
          const nextChunk = file.slice(start, end);
          reader.readAsArrayBuffer(nextChunk);
        }
      };
      // Start uploading the first piece of data
      const firstChunk = file.slice(0, chunkSize);
      reader.readAsArrayBuffer(firstChunk);
    }
    // finish upload, return url file
    sockets.onmessage = function (event) {
      let load: string = event.data;
      let arr: string[] = load.split("|")
      switch (arr[0]) {
        case "path" :
          action(arr[1]);
          break;
        case "error":
          console.log(arr[1])
          break;
        case "size":
          if (percentAction) percentAction(parseFloat(arr[1]))
      }
    };
  }
}
