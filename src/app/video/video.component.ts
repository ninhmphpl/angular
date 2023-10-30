import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
  ngOnInit(): void {
    this.api.getVideo(this.api.videoPage)
    this.api.getVideoStyle(this.api.videoStylePage)
  }
  constructor(public api : ApiService) {
  }
  next(){
    this.api.getVideo(this.api.videoPage++)
  }
  previous(){
    this.api.getVideo(this.api.videoPage++)
  }
}
