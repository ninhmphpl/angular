import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {publishFacade} from "@angular/compiler";

@Component({
  selector: 'app-popup-trending',
  templateUrl: './popup-trending.component.html',
  styleUrls: ['./popup-trending.component.scss']
})
export class PopupTrendingComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getPopupTrending()
    this.api.getTrending()
  }

  protected readonly publishFacade = publishFacade;
}
