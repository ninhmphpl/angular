import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login/login.service";
import {Animation, Category, WallPaper} from "./model/Model";
import {environment} from "./environment";


export const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private login: LoginService) {
  }

  //--------------------------------- Animation ---------------------------------------------
  animations: Animation[] = []

  getAnimation() {
    let category = (this.categorySelect) ? "&category_id=" + this.categorySelect.id : ""
    this.http.get(url + "/battery/animation?version=1000" + category).subscribe((value: any) => {
      this.animations = value.data
    }, error => alert(error.error.detail))
  }

  createAnimation() {
    this.http.post(url + "/battery/animation", new Animation(), this.login.getHeader()).subscribe((value: any) => {
      this.animations.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateAnimation(index: number) {
    this.http.post(url + "/battery/animation", this.animations[index], this.login.getHeader()).subscribe((value: any) => {
      this.animations[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteAnimation(index: number) {
    this.http.delete(url + "/battery/animation/" + this.animations[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.animations[index] = value.data
      this.animations.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Category ---------------------------------------------
  categories: Category[] = []
  categorySelect!: Category
  categoryType: string = ''

  getCategory() {
    let type = (this.categoryType.length > 0) ? "&type=" + this.categoryType : ""
    this.http.get(url + "/battery/category?version=1000" + type).subscribe((value: any) => {
      this.categories = value.data
    }, error => alert(error.error.detail))
  }

  createCategory() {
    this.http.post(url + "/battery/category", new Category(), this.login.getHeader()).subscribe((value: any) => {
      this.categories.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateCategory(index: number) {
    this.http.post(url + "/battery/category", this.categories[index], this.login.getHeader()).subscribe((value: any) => {
      this.categories[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteCategory(index: number) {
    this.http.delete(url + "/battery/category/" + this.categories[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.categories[index] = value.data
      this.categories.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- WallPaper ---------------------------------------------
  wallPapers: WallPaper[] = []

  getWallPaper() {
    let category = (this.categorySelect) ? "&category_id=" + this.categorySelect.id : ""
    this.http.get(url + "/battery/wallPaper?version=1000" + category).subscribe((value: any) => {
      this.wallPapers = value.data
    }, error => alert(error.error.detail))
  }

  createWallPaper() {
    this.http.post(url + "/battery/wallPaper", new WallPaper(), this.login.getHeader()).subscribe((value: any) => {
      this.wallPapers.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateWallPaper(index: number) {
    this.http.post(url + "/battery/wallPaper", this.wallPapers[index], this.login.getHeader()).subscribe((value: any) => {
      this.wallPapers[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteWallPaper(index: number) {
    this.http.delete(url + "/battery/wallPaper/" + this.wallPapers[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.wallPapers[index] = value.data
      this.wallPapers.splice(index, 1)
    }, error => alert(error.error.detail))
  }
}
