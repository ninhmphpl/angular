import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit{
  ngOnInit(): void {
    this.api.getIntro(this.api.bannerPage)
  }
  constructor(public api : ApiService) {
  }
  next(){
    this.api.getIntro(this.api.bannerPage++)
  }
  previous(){
    this.api.getIntro(this.api.bannerPage++)
  }

}
