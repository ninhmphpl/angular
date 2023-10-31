import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";
import {LoginService} from "./login/login.service";
import {Category} from "./model/Category";
import {WallPaper} from "./model/WallPaper";
const url = environment.url
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //--------------------------------- Style ---------------------------------------------
  styles : Category[] = []
  constructor(private http : HttpClient, private login : LoginService) { }
  getStyle(){
    this.http.get(url + "/wall-paper/category").subscribe((value : any) => {
      this.styles = value.data
    }, error => alert(error.error.detail))
  }
  createStyle(){
    this.http.post(url + "/wall-paper/category", new Category(), this.login.getHeader()).subscribe((value : any) => {
      this.styles.unshift(value.data)
    }, error => alert(error.error.detail))
  }
  updateStyle(index : number){
    this.http.post(url + "/wall-paper/category", this.styles[index], this.login.getHeader()).subscribe((value : any) => {
      this.styles[index] = value.data
    }, error => alert(error.error.detail))
  }
  deleteStyle(index : number){
    this.http.delete(url + "/wall-paper/category" + this.styles[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.styles[index] = value.data
      this.styles.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Wall Paper ---------------------------------------------
  wallPapers : WallPaper[] = []
  option = ['banner', 'feature', 'gif', 'aiGent']
  optionSelect = 'banner'
  getWallPaper(option : string){
    this.optionSelect = option
    this.http.get(url + "/wall-paper/" + this.option).subscribe((value : any) => {
      this.wallPapers = value.data
    }, error => alert(error.error.detail))
  }
  createWallPaper(){
    this.http.post(url + "/wall-paper/" + this.option, new WallPaper(), this.login.getHeader()).subscribe((value : any) => {
      this.wallPapers.unshift(value.data)
    }, error => alert(error.error.detail))
  }
  updateWallPaper(index : number){
    this.http.post(url + "/wall-paper/" + this.option, this.wallPapers[index], this.login.getHeader()).subscribe((value : any) => {
      this.wallPapers[index] = value.data
    }, error => alert(error.error.detail))
  }
  deleteWallPaper(index : number){
    this.http.delete(url + "/wall-paper/" + this.wallPapers[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.wallPapers[index] = value.data
      this.wallPapers.splice(index, 1)
    }, error => alert(error.error.detail))
  }
}
