import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  constructor(public api : ApiService){
  }

  ngOnInit(): void {
    this.api.categoryType = ''
    this.api.getCategory()
  }
}
