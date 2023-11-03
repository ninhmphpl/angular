import {Component, OnInit} from '@angular/core';
import {PaintingService} from "../painting.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  constructor(public api : PaintingService) {
  }
  ngOnInit(): void {
    this.api.getCategory()
  }
}
