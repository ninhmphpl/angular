import {Component, OnInit} from '@angular/core';
import {environment, errorAlert, successAlert} from "../../../environment/environments";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../model/Category";
import {ThemeService} from "../theme.service";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  constructor(public themeService : ThemeService) {
  }
  ngOnInit(): void {
  }
  create(){
    this.themeService.saveCategory(new Category(), category => {
      this.themeService.categories.unshift(category)
    })
  }
  save(i : number){
    this.themeService.saveCategory(this.themeService.categories[i], category => {
      this.themeService.categories[i] = category
    })
  }
  delete(i : number){
    this.themeService.deleteCategory(this.themeService.categories[i], () => {
      this.themeService.categories.splice(i, 1)
    })
  }
}
