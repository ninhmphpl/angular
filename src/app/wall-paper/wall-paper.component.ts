import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-wall-paper',
  templateUrl: './wall-paper.component.html',
  styleUrls: ['./wall-paper.component.scss']
})
export class WallPaperComponent implements OnInit{
  constructor(public api : ApiService){
  }

  ngOnInit(): void {
    this.api.categoryType = "wall"
    this.api.getCategory()
    this.api.getWallPaper()
  }
}
