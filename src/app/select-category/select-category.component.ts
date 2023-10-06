import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemeService} from "../theme.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent{
  @Input() categoryMain! : Category
  @Output() dataEvent = new EventEmitter<Category>();
  constructor(public themeService : ThemeService) {
  }

  select(i : number){
    this.dataEvent.emit(this.themeService.categories[i])
  }




}
