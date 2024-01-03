import {Component, OnInit} from '@angular/core';
import {Sticker} from "../model/Model";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  stickerSelected : Sticker | null = null;
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getCategory()
    this.api.getSticker()
  }

  addSticker(i : number){
    if(this.stickerSelected){
      if(this.api.cagegorys[i].stickers == null) this.api.cagegorys[i].stickers = []
      this.api.cagegorys[i].stickers.push(this.stickerSelected)
      this.api.updateCategory(i)
    }
    this.stickerSelected = null;
  }

}
