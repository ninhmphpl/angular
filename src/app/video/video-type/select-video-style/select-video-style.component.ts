import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../../../api.service";
import {Banner} from "../../../model/Banner";
import {VideoStyle} from "../../../model/VideoStyle";

@Component({
  selector: 'app-select-video-style',
  templateUrl: './select-video-style.component.html',
  styleUrls: ['./select-video-style.component.scss']
})
export class SelectVideoStyleComponent{
  @Output() dataEvent = new EventEmitter<VideoStyle>();
  @Input() videoStyle !: VideoStyle;

  index : number = 0;
  constructor(public api : ApiService) {
  }
  next(){
    this.api.getBanner(this.api.videoStylePage++)
  }
  previous(){
    this.api.getBanner(this.api.videoStylePage++)
  }
  select(){
    this.dataEvent.emit(this.videoStyle)
  }

}
