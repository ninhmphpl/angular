import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Home, Painting} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  domain = "http://localhost:8080";
  home! : Home;
  constructor(private http : HttpClient) {
    this.http.get(this.domain + "/pain/domain").subscribe((payload: any)=>{
      this.domain = payload.data.value
    }, (error : any)=>{
      alert(JSON.stringify(error))
    })
  }
  addBanner(){
    this.home.banner.push(new Painting("BANNER"))
  }
  addFeature(){
    this.home.features.push(new Painting("FEATURES"))
  }
  addAiRemover(){
    this.home.aiRemover.push(new Painting("AI_REMOVER"))
  }
  ngOnInit(): void {
    this.get()
  }
  get(){
    this.http.get(this.domain + "/pain/home").subscribe((payload : any)=>{
      this.home = payload.data
    }, (error : any)=>{
      alert(JSON.stringify(error))
    })
  }
  save(){
    this.http.post(this.domain + "/pain/home", this.home).subscribe((payload : any)=>{
      this.home = payload.data
      alert("OK")
    }, (error : any)=>{
      alert(JSON.stringify(error))
    })
  }
  setCoverImg(file : any, pain : any){
    this.uploadFile(file[0], this.domain.replace("http://", "ws://") + "/upload", "", (urlDownload : any)=>{
      pain.coverImgUrl = urlDownload
    })
  }
  setAfterImg(file : any, pain : any){
    this.uploadFile(file[0], this.domain.replace("http://", "ws://") + "/upload", "", (urlDownload : any)=>{
      pain.afterImgUrl = urlDownload
    })
  }
  setBeforeImg(file : any, pain : any){
    this.uploadFile(file[0], this.domain.replace("http://", "ws://") + "/upload", "", (urlDownload : any)=>{
      pain.beforeImgUrl = urlDownload
    })
  }

  // afterImgUrl: any
  // beforeImgUrl: any

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
