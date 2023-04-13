import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  sockets :any;
  uploadFile: any;


  ngOnInit(): void {}

  uploadFileFunction(event: any) {
    const file: File = event.target.files[0];
    const chunkSize = 1024*7; // Kích thước của từng phần dữ liệu (1 MB)
    const totalChunks = Math.ceil(file.size / chunkSize); // Tổng số phần dữ liệu
    let currentChunk = 0; // Số phần dữ liệu đã upload

    this.sockets = new WebSocket("ws://localhost:1999/upload?" + file.name);
    this.sockets.onopen = () => {
      console.log("connected")
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const data : ArrayBuffer = event.target.result;
        this.sockets.send(data);

        currentChunk++;
        if (currentChunk < totalChunks) {
          // Nếu chưa upload hết phần dữ liệu, tiếp tục upload phần tiếp theo
          const start = currentChunk * chunkSize;
          const end = Math.min(start + chunkSize, file.size);
          const nextChunk = file.slice(start, end);
          reader.readAsArrayBuffer(nextChunk);
        } else {
          // Nếu đã upload hết phần dữ liệu, gửi yêu cầu hoàn tất upload
          this.sockets.send("done");
        }
      };
      // Bắt đầu upload phần dữ liệu đầu tiên
      const firstChunk = file.slice(0, chunkSize);
      reader.readAsArrayBuffer(firstChunk);
    }
  }

  // soket() {
  //   this.sockets.onopen = () => {
  //     console.log("WebSocket connection opened.");
  //     const buffer = new ArrayBuffer(10);
  //     this.sockets.send(buffer)
  //   };
  //
  //   this.sockets.onmessage = function (event) {
  //     console.log("Received message: " + event.data);
  //   };
  //
  //
  //   this.sockets.onclose = function () {
  //     console.log("WebSocket connection closed.");
  //   };
  //
  //   this.sockets.onerror = function (event) {
  //     console.error("WebSocket error:", event);
  //   };
  // }

}
