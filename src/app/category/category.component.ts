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
  }

}
