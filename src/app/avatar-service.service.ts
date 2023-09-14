import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";
import {Category} from "./model/Category";
import {Template} from "./model/Template";

@Injectable({
  providedIn: 'root'
})
export class AvatarServiceService {
  url = environment.url
  category : Category[] = []
  template : Template[] = []
  constructor(private http : HttpClient) { }

  get(){
    this.getCategory()
    this.getTemplate()
  }
  getCategory(){
    this.http.get(this.url + "/category").subscribe((payload : any)=>{
      if(payload.code === 200) this.category = payload.data
    }, error => {
      alert(error.error.detail)
    })
  }
  getTemplate(){
    this.http.get(this.url + "/template").subscribe((payload : any)=>{
      if(payload.code === 200) this.template = payload.data
    }, error => {
      alert(error.error.detail)
    })
  }
  saveCategory(category : Category, getCategory :(category : Category) => any){
    this.http.post(this.url + "/category", category).subscribe((payload : any)=>{
      if(payload.code === 200) getCategory(payload.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  saveTemplate(template : Template, getTemplate :(template : Template) => any){
    this.http.post(this.url + "/template", template).subscribe((payload : any)=>{
      if(payload.code === 200) getTemplate(payload.data)
    }, error => {
      alert(error.error.detail)
    })
  }
  deleteCategory(categoryId : string, action : ()=> any){
    this.http.delete(this.url + "/category/" + categoryId).subscribe((payload : any)=>{
     action()
    }, error => {
      alert(error.error.detail)
    })
  }

  deleteTemplate(templateId : string, action : ()=> any){
    this.http.delete(this.url + "/template/" + templateId).subscribe((payload : any)=>{
      action()
    }, error => {
      alert(error.error.detail)
    })
  }



}
