import {Component, OnInit} from '@angular/core';
import {Music} from "../model/Music";
import {HttpClient} from "@angular/common/http";
import {environment, uploadFile} from "../Environment";
import {Upload} from "../model/Upload";

const urlPatrol = environment.hostPatrol
const urlUpload = environment.hostUpload
const urlFolderUpload = environment.urlFolder

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  uploadList: Upload[] = []
  musics: Music[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.http.get(urlPatrol + "/music?edit=true").subscribe((payload: any) => {
      if (payload.code == 200) {
        this.musics = payload.data
      } else {
        alert(payload.data)
      }
    }, (error: any) => {
      alert(JSON.stringify(error))
    })
  }

  save(index: number | null) {
    let body
    if(index != null){
      body = this.musics[index]
    }else {
      let upload = this.uploadList.pop()
      body = {name : upload?.name, url : upload?.url}
    }
    this.http.post(urlPatrol + "/music", body).subscribe((payload: any) => {
      if (payload.code == 200) {
        if (index != null) {
          this.musics[index] = payload.data
        } else {
          this.musics.push(payload.data)
        }
      } else {
        alert(payload.data)
      }
      alert("OK")
    }, (error: any) => {
      alert(JSON.stringify(error))
    })
  }

  delete(index: number) {
    this.http.delete(urlPatrol + "/music/" + this.musics[index].id).subscribe((payload: any) => {
      if (payload.code == 200) {
        this.musics.splice(index, 1)
        alert(payload.data)
      } else {
        alert(payload.data)
      }
    }, (error: any) => {
      alert(JSON.stringify(error))
    })
  }

  upload(files: FileList | null) {
    this.uploadList = []
    if (files && files.length > 0) {
      let process = 0;
      for (let i = 0; i < files.length; i++) {
        this.uploadList.push({name: files[i].name, percent: 0, url: ""})
        uploadFile(urlUpload, urlFolderUpload, files[i], url => {
          this.uploadList[i].url = url
          process++
          if (process === files.length) {
            while (this.uploadList.length > 0) {
              this.save(null)
            }
          }
        }, percent => {
          this.uploadList[i].percent = percent
        })
      }
    }
  }

  upThumb(index: number, file: FileList | null) {
    if (file && file.length > 0) {
      uploadFile(urlUpload, urlFolderUpload, file[0], url => {
        this.musics[index].thumb = url
        this.musics[index].thumbPercent = null
        this.save(index)
      }, percent => {
        this.musics[index].thumbPercent = percent
      })
    }
  }


}
