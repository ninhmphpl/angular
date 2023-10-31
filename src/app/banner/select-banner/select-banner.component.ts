import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApiService} from "../../api.service";
import {Banner} from "../../model/Banner";

@Component({
  selector: 'app-select-banner',
  templateUrl: './select-banner.component.html',
  styleUrls: ['./select-banner.component.scss']
})
export class SelectBannerComponent {
  @Output() dataEvent = new EventEmitter<Banner>();
  @Input() banner!: Banner;
  index : number = 0;
  constructor(public api : ApiService) {
  }
  next(){
    this.api.getBanner(this.api.bannerPage++)
  }
  previous(){
    this.api.getBanner(this.api.bannerPage++)
  }
  select(){
    this.dataEvent.emit(this.banner)
  }
}
