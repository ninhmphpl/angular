import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Sticker} from "../model/Model";

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit{

  stickerSelected : Sticker | null = null;
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getSticker()
  }

}
