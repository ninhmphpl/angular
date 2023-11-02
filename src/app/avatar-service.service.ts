import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";
import {Category} from "./model/Category";
import {Template} from "./model/Template";
import {LoginService} from "./login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AvatarServiceService {
  url = environment.url
  categorySelect! : Category
  category : Category[] = []
  constructor(private http : HttpClient, private login : LoginService) { }

  get(){
    this.getCategory()
  }
  getCategory(){
    this.http.get(this.url + "/category").subscribe((payload : any)=>{
      if(payload.code === 200){
        this.category = payload.data
        if(this.category.length > 0) this.categorySelect = this.category[0]
      }
    }, error => {
      alert(error.error.detail)
    })
  }
  getTemplate(){
    this.http.get(this.url + "/template").subscribe((payload : any)=>{
      if(payload.code === 200) this.categorySelect = payload.data
    }, error => {
      alert(error.error.detail)
    })
  }
  saveCategory(category : Category, getCategory :(category : Category) => any){
    this.http.post(this.url + "/category", category, this.login.getHeader()).subscribe((payload : any)=>{
      if(payload.code === 200) getCategory(payload.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  saveTemplate(template : Template, getTemplate :(template : Template) => any){
    this.http.post(this.url + "/template/update-category/" + this.categorySelect.id, template, this.login.getHeader()).subscribe((payload : any)=>{
      if(payload.code === 200) getTemplate(payload.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  deleteCategory(categoryId : string, action : ()=> any){
    this.http.delete(this.url + "/category/" + categoryId, this.login.getHeader()).subscribe((payload : any)=>{
     action()
    }, error => {
      alert(error.error.detail)
    })
  }

  deleteTemplate(templateId : string, action : ()=> any){
    this.http.delete(this.url + "/template/" + templateId, this.login.getHeader()).subscribe((payload : any)=>{
      action()
    }, error => {
      alert(error.error.detail)
    })
  }



}
