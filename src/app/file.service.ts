import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileData} from "../model/FileData";
import {environment, errorAlert, uploadFile} from "../environment/Environmen";

const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class FileService {
  files: FileData[] = []

  constructor(private http: HttpClient) {
  }

  getList(functionData : any) {
    this.http.get(url + "/data/v3").subscribe((payload: any) => {
      if(payload.code == 200) functionData(payload.data)
      else errorAlert("Error code : " + payload.code)
    }, (error : any)=>{
      errorAlert(JSON.stringify(error))
    })
  }

  upload(files : File[], path : string, zip : boolean){
    if(files && files.length > 0){
      for(let file of files){
        let fileName = path + "/" + Date.now() + file.name
        uploadFile(url.replace("http","ws") + "/upload", fileName, file, zip, (urlDownload : string)=>{
          console.log(urlDownload)
        }, (percent : number) => {
          console.log(percent + "%")
        })
      }
    }else {
      errorAlert("Input file illegal")
    }
  }



}
