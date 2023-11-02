import {Component, OnInit} from '@angular/core';
import {AvatarServiceService} from "../avatar-service.service";
import {Template} from "../model/Template";
import {Category} from "../model/Category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent{
  categorySelection : number = 0;
  templateChoice : TemplateChoice[] = []
  categorySuggestion : string[] = []
  constructor(public avatar : AvatarServiceService) {
  }
  create(){
    this.avatar.saveCategory(new Category(), template => this.avatar.category.unshift(template))
  }
  save(i : number){
    this.avatar.saveCategory(this.avatar.category[i], template => this.avatar.category[i] = template)
  }
  delete(i : number){
    this.avatar.deleteCategory(this.avatar.category[i].id, () => this.avatar.category.splice(i, 1))
  }
  getTemplateChoice(i : number){
    this.categorySelection = i;
    this.templateChoice = []
    for(let t1 of this.avatar.categorySelect.templates){
      let choice = new TemplateChoice(false, t1)
      for(let t2 of this.avatar.category[i].templates){
        if(t1.id === t2.id){
          choice.choice = true
          break
        }
      }
      this.templateChoice.push(choice)
    }
    console.log(this.templateChoice)
  }
  setTemplate(){
    let template : Template[] = []
    for (let t of this.templateChoice){
      if(t.choice) template.push(t.template)
    }
    this.avatar.category[this.categorySelection].templates = template
    this.save(this.categorySelection)
  }

  getCategorySuggestion(i : number){
    this.categorySelection = i
    this.categorySuggestion = this.avatar.category[i].suggestion
  }
  setCategorySuggestion(){
    this.avatar.category[this.categorySelection].suggestion = this.categorySuggestion
    this.save(this.categorySelection)
  }

}
export class TemplateChoice{

  constructor(choice: boolean, template: Template) {
    this.choice = choice;
    this.template = template;
  }

  choice : boolean
  template : Template
}
export class CategoryChoice{

  constructor(choice: boolean, category: Category) {
    this.choice = choice;
    this.category = category;
  }

  choice : boolean
  category : Category
}
