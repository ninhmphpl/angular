import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-wall-paper',
  templateUrl: './wall-paper.component.html',
  styleUrls: ['./wall-paper.component.scss']
})
export class WallPaperComponent  implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getWallPaper()
    this.api.categoryOptionSelect = this.api.categoryOption[0]
    this.api.getCategory()
  }
}
