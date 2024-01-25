import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login/login.service";
import {environment} from "./environment";
import {Category, Item, Template} from "./model/Model";


export const urlHost = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private login: LoginService) {
  }

  //--------------------------------- template ---------------------------------------------
  templates: Template[] = []
  public getTemplate() {
    this.http.get(urlHost + "/api/v2/template?edit=true").subscribe((value: any) => {
      this.templates = value.data
    }, error => alert(error.error.detail))
  }

  public createTemplate() {
    this.http.post(urlHost + "/api/v2/template", new Template(), this.login.getHeader()).subscribe((value: any) => {
      this.templates.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  public updateTemplate(index: number) {
    console.log(this.templates[index])
    this.http.post(urlHost + "/api/v2/template", this.templates[index], this.login.getHeader()).subscribe((value: any) => {
      this.templates[index] = value.data
    }, error => alert(error.error.detail))
  }

  public deleteTemplate(index: number) {
    this.http.delete(urlHost + "/api/v2/template/" + this.templates[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.templates[index] = value.data
      this.templates.splice(index, 1)
    }, error => alert(error.error.detail))
  }
  //--------------------------------- category ---------------------------------------------
  categorys: Category[] = []
  public getCategory() {
    this.http.get(urlHost + "/api/v2/category?edit=true").subscribe((value: any) => {
      this.categorys = value.data
    }, error => alert(error.error.detail))
  }

  public createCategory() {
    this.http.post(urlHost + "/api/v2/category", new Category(), this.login.getHeader()).subscribe((value: any) => {
      this.categorys.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  public updateCategory(index: number) {
    this.http.post(urlHost + "/api/v2/category", this.categorys[index], this.login.getHeader()).subscribe((value: any) => {
      this.categorys[index] = value.data
    }, error => alert(error.error.detail))
  }

  public deleteCategory(index: number) {
    this.http.delete(urlHost + "/api/v2/category/" + this.categorys[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.categorys[index] = value.data
      this.categorys.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- item ---------------------------------------------
  items: Item[] = []
  public getItem() {
    this.http.get(urlHost + "/api/v2/item?edit=true").subscribe((value: any) => {
      this.items = value.data
    }, error => alert(error.error.detail))
  }

  public createItem() {
    this.http.post(urlHost + "/api/v2/item", new Item(), this.login.getHeader()).subscribe((value: any) => {
      this.items.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  public updateItem(index: number) {
    this.http.post(urlHost + "/api/v2/item", this.items[index], this.login.getHeader()).subscribe((value: any) => {
      this.items[index] = value.data
    }, error => alert(error.error.detail))
  }

  public deleteItem(index: number) {
    this.http.delete(urlHost + "/api/v2/item/" + this.items[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.items[index] = value.data
      this.items.splice(index, 1)
    }, error => alert(error.error.detail))
  }




}
