import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";
import {LoginService} from "./login/login.service";
import {Category} from "./model/Category";
import {WallPaper} from "./model/WallPaper";
import {Theme} from "./model/Theme";
import {Icon} from "./model/Icon";
import {App} from "./model/App";
import {Widget} from "./model/Widget";
import {WidgetType} from "./model/WidgetType";
const url = environment.url
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //--------------------------------- Style ---------------------------------------------
  categories : Category[] = []
  constructor(private http : HttpClient, private login : LoginService) { }
  getCategory(){
    this.http.get(url + "/wall-paper/category").subscribe((value : any) => {
      this.categories = value.data
    }, error => alert(error.error.detail))
  }
  createCategory(){
    this.http.post(url + "/wall-paper/category", new Category(), this.login.getHeader()).subscribe((value : any) => {
      this.categories.unshift(value.data)
    }, error => alert(error.error.detail))
  }
  updateCategory(index : number){
    this.http.post(url + "/wall-paper/category", this.categories[index], this.login.getHeader()).subscribe((value : any) => {
      this.categories[index] = value.data
    }, error => alert(error.error.detail))
  }
  deleteCategory(index : number){
    this.http.delete(url + "/wall-paper/category" + this.categories[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.categories[index] = value.data
      this.categories.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Wall Paper ---------------------------------------------
  wallPapers : WallPaper[] = []
  wallPaperPage = 0
  wallPaperPageTotal = 0
  option = ['banner', 'feature', 'gif', 'aiGent']
  optionSelect = 'banner'

  previousWallPaper(){
    this.wallPaperPage --
    this.getWallPaper()
  }
  nextWallPaper(){
    this.wallPaperPage ++
    this.getWallPaper()
  }
  getWallPaper(){
    this.http.get(url + "/wall-paper/" + this.optionSelect + "?page=" + this.wallPaperPage).subscribe((value : any) => {
      this.wallPapers = value.data.content
      this.wallPaperPage = value.data.number
      this.wallPaperPageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }
  createWallPaper(){
    this.http.post(url + "/wall-paper/" + this.optionSelect, new WallPaper(), this.login.getHeader()).subscribe((value : any) => {
      this.wallPapers.unshift(value.data)
    }, error => alert(error.error.detail))
  }
  updateWallPaper(index : number){
    this.http.post(url + "/wall-paper/" + this.optionSelect, this.wallPapers[index], this.login.getHeader()).subscribe((value : any) => {
      this.wallPapers[index] = value.data
    }, error => alert(error.error.detail))
  }
  deleteWallPaper(index : number){
    this.http.delete(url + "/wall-paper/" + this.wallPapers[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.wallPapers[index] = value.data
      this.wallPapers.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Theme ---------------------------------------------
  themes : Theme[] = []
  themePage = 0
  themePageTotal = 0
  themeOption = ['trending', 'banner', 'tryOut']
  themeOptionSelect = 'trending'

  previousTheme(){
    this.themePage --
    this.getTheme()
  }
  nextTheme(){
    this.themePage ++
    this.getTheme()
  }
  getTheme(){
    this.http.get(url + "/theme/" + this.themeOptionSelect + "?page=" + this.themePage).subscribe((value : any) => {
      this.themes = value.data.content
      this.themePage = value.data.number
      this.themePageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }
  createTheme(){
    this.http.post(url + "/theme/" + this.themeOptionSelect, new Theme(), this.login.getHeader()).subscribe((value : any) => {
      console.log(value.data)
      this.themes.unshift(value.data)
    }, error => alert(error.error.detail))
  }
  updateTheme(index : number){
    this.http.post(url + "/theme/" + this.themeOptionSelect, this.themes[index], this.login.getHeader()).subscribe((value : any) => {
      this.themes[index] = value.data
    }, error => alert(error.error.detail))
  }
  deleteTheme(index : number){
    this.http.delete(url + "/theme/" + this.themes[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.themes[index] = value.data
      this.themes.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Icon ---------------------------------------------
  icons : Icon[] = []
  getIcon(){
    this.http.get(url + "/icon").subscribe((value : any) => {
      this.icons = value.data
    }, error => alert(error.error.detail))
  }
  createIcon(){
    this.http.post(url + "/icon", new Icon(), this.login.getHeader()).subscribe((value : any) => {
      console.log(value.data)
      this.icons.unshift(value.data)
    }, error => alert(error.error.detail))
  }
  updateIcon(index : number){
    this.http.post(url + "/icon", this.icons[index], this.login.getHeader()).subscribe((value : any) => {
      this.icons[index] = value.data
    }, error => alert(error.error.detail))
  }
  deleteIcon(index : number){
    this.http.delete(url + "/icon" + this.icons[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.icons[index] = value.data
      this.icons.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- App ---------------------------------------------
  apps : App[] = []
  getApp(){
    this.http.get(url + "/app").subscribe((value : any) => {
      this.apps = value.data
    }, error => alert(error.error.detail))
  }
  createApp(){
    this.http.post(url + "/app", new App(), this.login.getHeader()).subscribe((value : any) => {
      console.log(value.data)
      this.apps.unshift(value.data)
    }, error => alert(error.error.detail))
  }
  updateApp(index : number){
    this.http.post(url + "/app", this.apps[index], this.login.getHeader()).subscribe((value : any) => {
      this.apps[index] = value.data
    }, error => alert(error.error.detail))
  }
  deleteApp(index : number){
    this.http.delete(url + "/app/" + this.apps[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.apps[index] = value.data
      this.apps.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Widget ---------------------------------------------
  widgets : Widget[] = []
  widgetPage = 0
  widgetPageTotal = 0

  previousWidget(){
    this.widgetPage --
    this.getWidget()
  }
  nextWidget(){
    this.widgetPage ++
    this.getWidget()
  }
  getWidget(){
    this.http.get(url + "/widget?page=" + this.widgetPage).subscribe((value : any) => {
      this.widgets = value.data.content
      this.widgetPage = value.data.number
      this.widgetPageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }
  createWidget(){
    this.http.post(url + "/widget", new Widget(), this.login.getHeader()).subscribe((value : any) => {
      console.log(value.data)
      this.widgets.unshift(value.data)
    }, error => alert(error.error.detail))
  }
  updateWidget(index : number){
    this.http.post(url + "/widget", this.widgets[index], this.login.getHeader()).subscribe((value : any) => {
      this.widgets[index] = value.data
    }, error => alert(error.error.detail))
  }
  deleteWidget(index : number){
    this.http.delete(url + "/widget/" + this.widgets[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.widgets[index] = value.data
      this.widgets.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Widget Type ---------------------------------------------
  widgetTypes : WidgetType[] = []
  widgetTypePage = 0
  widgetTypePageTotal = 0
  previousWidgetType(){
    this.widgetTypePage --
    this.getWidgetType()
  }
  nextWidgetType(){
    this.widgetTypePage ++
    this.getWidgetType()
  }
  getWidgetType(){
    this.http.get(url + "/widget/type").subscribe((value : any) => {
      this.widgetTypes = value.data.content
      this.widgetTypePage = value.data.number
      this.widgetTypePageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }
  createWidgetType(){
    this.http.post(url + "/widget/type", new WidgetType(), this.login.getHeader()).subscribe((value : any) => {
      console.log(value.data)
      this.widgetTypes.unshift(value.data)
    }, error => alert(error.error.detail))
  }
  updateWidgetType(index : number){
    this.http.post(url + "/widget/type", this.widgetTypes[index], this.login.getHeader()).subscribe((value : any) => {
      this.widgetTypes[index] = value.data
    }, error => alert(error.error.detail))
  }
  deleteWidgetType(index : number){
    this.http.delete(url + "/widget/type" + this.widgetTypes[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.widgetTypes[index] = value.data
      this.widgetTypes.splice(index, 1)
    }, error => alert(error.error.detail))
  }
}
