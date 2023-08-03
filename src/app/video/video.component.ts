import {Component, OnInit} from '@angular/core';
import {Upload} from "../model/Upload";
import {HttpClient} from "@angular/common/http";
import {environment, uploadFile} from "../Environment";
import {Video} from "../model/Video";

const urlPatrol = environment.hostPatrol
const urlUpload = environment.hostUpload
const urlFolderUpload = environment.urlFolder
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
  uploadList : Upload[] = []
  videos: Video[] = []
  musicCreate : Video = {
    id : null,
    name : null,
    url : null,
    description : null,
    thumb : null,
    thumbPercent : null
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.http.get(urlPatrol + "/video").subscribe((payload: any) => {
      if (payload.code == 200) {
        this.videos = payload.data
      } else {
        alert(payload.data)
      }
    }, (error: any) => {
      alert(JSON.stringify(error))
    })
  }

  save(index : number | null) {
    console.log('before: ' + index)
    let body = (index != null) ? this.videos[index] : this.musicCreate
    console.log("Body: ")
    console.log(body)
    this.http.post(urlPatrol + "/video", body).subscribe((payload: any) => {
      console.log('before: ' + index)
      if (payload.code == 200) {
        if(index != null){
          this.videos[index] = payload.data
        }else {
          this.videos.push(payload.data)
        }
        console.log(this.videos)
      } else {
        alert(payload.data)
      }
      alert("OK")
    }, (error: any) => {
      alert(JSON.stringify(error))
    })
  }

  delete(index: number) {
    this.http.delete(urlPatrol + "/video/" + this.videos[index].id).subscribe((payload: any) => {
      if (payload.code == 200) {
        this.videos.splice(index, 1)
        alert(payload.data)
      } else {
        alert(payload.data)
      }
    }, (error: any) => {
      alert(JSON.stringify(error))
    })
  }

  upload(files: FileList | null) {
    if (files && files.length > 0) {
      let process = 0;
      for (let i = 0; i < files.length; i++) {
        process++
        this.uploadList.push({name : files[i].name, percent : 0, url : ""})
        uploadFile(urlUpload, urlFolderUpload, files[i], url =>{
          this.uploadList[i].url = url
          this.musicCreate.url = url
          this.musicCreate.name = files[i].name
          this.save(null)
          if(--process === 0){
            this.uploadList = []
          }
        }, percent => {
          this.uploadList[i].percent = percent
        })
      }
    }
  }
  upThumb(index : number, file : FileList | null){
    if(file && file.length > 0){
      uploadFile(urlUpload, urlFolderUpload, file[0], url => {
        this.videos[index].thumb = url
        this.videos[index].thumbPercent = null
        this.save(index)
      }, percent =>{
        this.videos[index].thumbPercent = percent
      })
    }
  }

}
