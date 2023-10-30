import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{
  ngOnInit(): void {
    this.api.getBanner(this.api.bannerPage)
  }
  constructor(public api : ApiService) {
  }
  next(){
    this.api.getBanner(this.api.bannerPage++)
  }
  previous(){
    this.api.getBanner(this.api.bannerPage++)
  }

}
