import {Component, OnInit} from '@angular/core';
import {Upload} from "../model/Upload";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment, getHeader, uploadFile} from "../Environment";
import {Video} from "../model/Video";
import {Type} from "../model/Type";
import {TypeService} from "../type.service";
import {MusicService} from "../music.service";
import {Music} from "../model/Music";

const urlPatrol = environment.url

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  uploadList: Upload[] = []
  videos: Video[] = []
  types: Type[] = []

  constructor(private http: HttpClient, private typeService: TypeService, public musicService : MusicService) {
  }

  ngOnInit(): void {
    this.get()
    this.musicService.get()
    this.typeService.getType(data => {
      this.types = data
    })
  }

  get() {
    this.http.get(urlPatrol + "/video?edit=true").subscribe((payload: any) => {
      if (payload.code == 200) {
        this.videos = payload.data
        for (const video of this.videos) {
          // if(video.music == null) video.music = new Music()
          // if(video.videoType == null) video.videoType = new Type()
        }
      } else {
        alert(payload.data)
      }
    }, (error: any) => {
      alert(JSON.stringify(error.error.detail))
    })
  }

  create(){
    this.save(new Video(), video => this.videos.unshift(video))
  }
  saveVideo(i : number){
    this.save(this.videos[i], video => this.videos[i] = video)
  }

  save(video : Video, action : (video : Video)=> any) {
    console.log(video)
    this.http.post(urlPatrol + "/video", video, getHeader()).subscribe((payload: any) => {
      // if(payload.data.videoType === null) payload.data.videoType = new Type()
      // if(payload.data.music === null)payload.data.music = new Music()
      action(payload.data)
      alert("OK")
    }, (error: any) => {
      console.log(error)
      alert(JSON.stringify(error.error.detail))
    })
  }

  delete(index: number) {
    this.http.delete(urlPatrol + "/video/" + this.videos[index].id, getHeader()).subscribe((payload: any) => {
      if (payload.code == 200) {
        this.videos.splice(index, 1)
        alert(payload.data)
      } else {
        alert(payload.data)
      }
    }, (error: any) => {
      alert(JSON.stringify(error.error.detail))
    })
  }

}
