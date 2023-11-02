import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";
import {LoginService} from "./login/login.service";
import {Category, Style, Theme, Template, StyleOption} from "./model/ThemeModel";

const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private login: LoginService) {
  }

  //--------------------------------- Theme ---------------------------------------------
  themes: Theme[] = []
  themePage = 0;
  themePageTotal = 0;

  nextTheme() {
    if (this.themePage < this.themePageTotal) {
      this.themePage++
      this.getTheme()
    }
  }

  previousTheme() {
    if (this.themePage > 0) {
      this.themePage--
      this.getTheme()
    }
  }

  getTheme() {
    this.http.get(url + "/now/theme?page=" + this.themePage).subscribe((value: any) => {
      this.themes = value.data.content
      this.themePage = value.data.number
      this.themePageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }

  createTheme() {
    this.http.post(url + "/now/theme", new Theme(), this.login.getHeader()).subscribe((value: any) => {
      this.themes.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateTheme(index: number) {
    this.http.post(url + "/now/theme", this.themes[index], this.login.getHeader()).subscribe((value: any) => {
      this.themes[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteTheme(index: number) {
    this.http.delete(url + "/now/theme/" + this.themes[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.themes[index] = value.data
      this.themes.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Category ---------------------------------------------
  categories: Category[] = []

  getCategory() {
    this.http.get(url + "/now/category").subscribe((value: any) => {
      this.categories = value.data
    }, error => alert(error.error.detail))
  }

  createCategory() {
    this.http.post(url + "/now/category", new Category(), this.login.getHeader()).subscribe((value: any) => {
      this.categories.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateCategory(index: number) {
    this.http.post(url + "/now/category", this.categories[index], this.login.getHeader()).subscribe((value: any) => {
      this.categories[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteCategory(index: number) {
    this.http.delete(url + "/now/category/" + this.categories[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.categories[index] = value.data
      this.categories.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Style ---------------------------------------------
  styles: Style[] = []
  styleSuggests : StyleOption[] = []
  styleTricks : StyleOption[] = []

  getStyle() {
    this.http.get(url + "/now/style").subscribe((value: any) => {
      this.styles = value.data
    }, error => alert(error.error.detail))
  }
  getStyleHome() {
    this.http.get(url + "/now/style/home").subscribe((value: any) => {
      this.styles = value.style
      this.styleSuggests = value.suggest
      this.styleTricks = value.tricks
    }, error => alert(error.error.detail))
  }

  createStyle() {
    this.http.post(url + "/now/style", new Style(), this.login.getHeader()).subscribe((value: any) => {
      this.styles.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateStyle(index: number) {
    this.http.post(url + "/now/style", this.styles[index], this.login.getHeader()).subscribe((value: any) => {
      this.styles[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteStyle(index: number) {
    this.http.delete(url + "/now/style/" + this.styles[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.styles.splice(index, 1)
    }, error => alert(error.error.detail))
  }
  //--------------------------------- StyleOption ---------------------------------------------
  createStyleOptionTricks() {
    let a = new StyleOption();
    a.type = "trick"
    this.http.post(url + "/now/style/option", a, this.login.getHeader()).subscribe((value: any) => {
      this.styleTricks.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateStyleOptionTricks(index: number) {
    this.http.post(url + "/now/style/option", this.styleTricks[index], this.login.getHeader()).subscribe((value: any) => {
      this.styleTricks[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteStyleOptionTricks(index: number) {
    this.http.delete(url + "/now/style/option/" + this.styleSuggests[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.styleTricks.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  createStyleOptionSuggests() {
    let a = new StyleOption();
    a.type = "suggestion"
    this.http.post(url + "/now/style/option", a, this.login.getHeader()).subscribe((value: any) => {
      this.styleSuggests.unshift(value.data)
    }, error => alert(error.error.detail))
  }
  updateStyleOptionSuggest(index: number) {
    this.http.post(url + "/now/style/option", this.styleSuggests[index], this.login.getHeader()).subscribe((value: any) => {
      this.styleSuggests[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteStyleOptionSuggest(index: number) {
    this.http.delete(url + "/now/style/option/" + this.styleSuggests[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.styleSuggests.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Template ---------------------------------------------
  templates: Template[] = []
  templatePage = 0;
  templatePageTotal = 0;

  nextTemplate() {
    if (this.templatePage < this.templatePageTotal) {
      this.templatePage++
      this.getTemplate()
    }
  }

  previousTemplate() {
    if (this.templatePage > 0) {
      this.templatePage--
      this.getTemplate()
    }
  }

  getTemplate() {
    this.http.get(url + "/now/template?page=" + this.templatePage).subscribe((value: any) => {
      this.templates = value.data.content
      this.templatePage = value.data.number
      this.templatePageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }

  createTemplate() {
    this.http.post(url + "/now/template", new Template(), this.login.getHeader()).subscribe((value: any) => {
      this.templates.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateTemplate(index: number) {
    this.http.post(url + "/now/template", this.templates[index], this.login.getHeader()).subscribe((value: any) => {
      this.templates[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteTemplate(index: number) {
    this.http.delete(url + "/now/template/" + this.templates[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.templates.splice(index, 1)
    }, error => alert(error.error.detail))
  }
}
