import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit{
  constructor(public api : ApiService){
  }

  ngOnInit(): void {
    this.api.categoryType = "animation"
    this.api.getCategory()
    this.api.getAnimation()
  }
}
