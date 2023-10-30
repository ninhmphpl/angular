import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-video-style',
  templateUrl: './video-style.component.html',
  styleUrls: ['./video-style.component.scss']
})
export class VideoStyleComponent implements OnInit{
  ngOnInit(): void {
    this.api.getVideoStyle(this.api.videoStylePage)
  }
  constructor(public api : ApiService) {
  }
  next(){
    this.api.getVideoStyle(this.api.videoStylePage++)
  }
  previous(){
    this.api.getVideoStyle(this.api.videoStylePage++)
  }
}
