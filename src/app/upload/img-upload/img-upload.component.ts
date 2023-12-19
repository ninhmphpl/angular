import {Component, EventEmitter, Input, Output} from '@angular/core';
import {environment} from "../../Environment";

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @Input() img: string = "";
  @Input() type : string = 'img';
  @Input() imgWith: string = "100px";
  @Input() imgHeight: string = "100px";
  urlSocket = environment.url.replace("http", "ws") + "/upload"
  urlDefault = ""
  percent : number = 0;
  sendData(event: any) {
    this.uploadFile(event.target.files[0], this.urlSocket, "", url => {
      console.log(url)
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);

    switch (request.method) {
      case 'PUT':
        await env.MY_BUCKET.put(key, request.body);
        return new Response(`Put ${key} successfully!`);
      case 'GET':
        const object = await env.MY_BUCKET.get(key);

        if (object === null) {
          return new Response('Object Not Found', { status: 404 });
        }

        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set('etag', object.httpEtag);

        return new Response(object.body, {
          headers,
        });
      case 'DELETE':
        await env.MY_BUCKET.delete(key);
        return new Response('Deleted!');

      default:
        return new Response('Method Not Allowed', {
          status: 405,
          headers: {
            Allow: 'PUT, GET, DELETE',
          },
        });
    }
  },
};
