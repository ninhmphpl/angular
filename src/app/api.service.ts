import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login/login.service";
import {environment} from "./environment";
import {Category, Sticker, Style} from "./model/Model";


export const urlHost = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private login: LoginService) {
  }

  // category
  cagegorys : Category[] = []

  getCategory() {
    this.http.get<{ code: string, data: Category[] }>(urlHost + "/api/sticker/category?edit=true").subscribe(value => {
      this.cagegorys = value.data;
    }, error => alert(error.error.detail))
  }

  createCategory() {
    this.http.post<{ code: string, data: Category}>(urlHost + "/api/sticker/category", new Category(), this.login.getHeader()).subscribe(value => {
      this.cagegorys.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateCategory(i: number) {
    this.http.post<{ code: string, data: Category}>(urlHost + "/api/sticker/category", this.cagegorys[i], this.login.getHeader()).subscribe(value => {
      this.cagegorys[i] = value.data
    }, error => alert(error.error.detail))
  }

  deleteCategory(i: number) {
    this.http.delete<undefined>(urlHost + "/api/sticker/category/" + this.cagegorys[i].id, this.login.getHeader()).subscribe(value => {
      this.cagegorys.splice(i, 1)
    }, error => alert(error.error.detail))
  }

  // sticker
  stickers: Sticker[] = []

  getSticker() {
    this.http.get<{ code: string, data: Sticker[] }>(urlHost + "/api/sticker/sticker").subscribe(value => {
      this.stickers = value.data;
    }, error => alert(error.error.detail))
  }

  createSticker() {
    this.http.post<{ code: string, data: Sticker}>(urlHost + "/api/sticker/sticker", new Sticker(), this.login.getHeader()).subscribe(value => {
      this.stickers.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateSticker(i: number) {
    this.http.post<{ code: string, data: Sticker }>(urlHost + "/api/sticker/sticker", this.stickers[i], this.login.getHeader()).subscribe(value => {
      this.stickers[i] = value.data
    }, error => alert(error.error.detail))
  }

  deleteSticker(i: number) {
    this.http.delete<undefined>(urlHost + "/api/sticker/sticker/" + this.stickers[i].id, this.login.getHeader()).subscribe(value => {
      this.stickers.splice(i, 1)
    }, error => alert(error.error.detail))
  }

  // style
  styles : Style[] = []

  getStyle() {
    this.http.get<{ code: string, data: Style[] }>(urlHost + "/api/sticker/style?edit=true").subscribe(value => {
      this.styles = value.data;
    }, error => alert(error.error.detail))
  }

  createStyle() {
    this.http.post<{ code: string, data: Style}>(urlHost + "/api/sticker/style", new Style(), this.login.getHeader()).subscribe(value => {
      this.styles.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateStyle(i: number) {
    this.http.post<{ code: string, data: Style}>(urlHost + "/api/sticker/style", this.styles[i], this.login.getHeader()).subscribe(value => {
      this.styles[i] = value.data
    }, error => alert(error.error.detail))
  }

  deleteStyle(i: number) {
    this.http.delete<undefined>(urlHost + "/api/sticker/style/" + this.styles[i].id, this.login.getHeader()).subscribe(value => {
      this.styles.splice(i, 1)
    }, error => alert(error.error.detail))
  }



}
