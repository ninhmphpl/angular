import {Injectable} from '@angular/core';
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
import {Template} from "./model/Template";
import {Style} from "./model/Style";

const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //--------------------------------- Style ---------------------------------------------
  categories: Category[] = []
  categoryOption = ['wall','template', 'style']
  categoryOptionSelect = 'wall'

  constructor(private http: HttpClient, private login: LoginService) {
  }

  getCategory() {
    this.http.get(url + "/wall-paper/category/" + this.categoryOptionSelect).subscribe((value: any) => {
      this.categories = value.data
    }, error => alert(error.error.detail))
  }

  createCategory() {
    this.http.post(url + "/wall-paper/category/" + this.categoryOptionSelect, new Category(), this.login.getHeader()).subscribe((value: any) => {
      this.categories.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateCategory(index: number) {
    this.http.post(url + "/wall-paper/category/" + this.categoryOptionSelect, this.categories[index], this.login.getHeader()).subscribe((value: any) => {
      this.categories[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteCategory(index: number) {
    this.http.delete(url + "/wall-paper/category" + this.categories[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.categories[index] = value.data
      this.categories.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Wall Paper ---------------------------------------------
  wallPapers: WallPaper[] = []
  wallPaperPage = 0
  wallPaperPageTotal = 0
  wallPaperCategorySelect !: Category
  option = ['banner', 'feature', 'gif', 'aiGent']
  optionSelect = 'banner'

  previousWallPaper() {
    if(this.wallPaperPage > 0)
    this.wallPaperPage--
    this.getWallPaper()
  }

  nextWallPaper() {
    if(this.wallPaperPage < this.wallPaperPageTotal)
    this.wallPaperPage++
    this.getWallPaper()
  }

  getWallPaper() {
    this.http.get(url + "/wall-paper/" + this.optionSelect + "?page=" + this.wallPaperPage + ((this.wallPaperCategorySelect)?("&category_id=" + this.wallPaperCategorySelect.id):"")).subscribe((value: any) => {
      this.wallPapers = value.data.content
      this.wallPaperPage = value.data.number
      this.wallPaperPageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }

  createWallPaper() {
    this.http.post(url + "/wall-paper/" + this.optionSelect, new WallPaper(), this.login.getHeader()).subscribe((value: any) => {
      this.wallPapers.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateWallPaper(index: number) {
    this.http.post(url + "/wall-paper/" + this.optionSelect, this.wallPapers[index], this.login.getHeader()).subscribe((value: any) => {
      this.wallPapers[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteWallPaper(index: number) {
    this.http.delete(url + "/wall-paper/" + this.wallPapers[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.wallPapers[index] = value.data
      this.wallPapers.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Theme ---------------------------------------------
  themes: Theme[] = []
  themePage = 0
  themePageTotal = 0
  themeOption = ['trending', 'banner', 'tryOut']
  themeOptionSelect = 'trending'

  previousTheme() {
    if(this.themePage > 0)
    this.themePage--
    this.getTheme()
  }

  nextTheme() {
    if(this.themePage < this.themePageTotal)
    this.themePage++
    this.getTheme()
  }

  getTheme() {
    this.http.get(url + "/theme/" + this.themeOptionSelect + "?page=" + this.themePage).subscribe((value: any) => {
      this.themes = value.data.content
      this.themePage = value.data.number
      this.themePageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }

  createTheme() {
    this.http.post(url + "/theme/" + this.themeOptionSelect, new Theme(), this.login.getHeader()).subscribe((value: any) => {
      this.themes.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateTheme(index: number) {
    this.http.post(url + "/theme/" + this.themeOptionSelect, this.themes[index], this.login.getHeader()).subscribe((value: any) => {
      this.themes[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteTheme(index: number) {
    this.http.delete(url + "/theme/" + this.themes[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.themes[index] = value.data
      this.themes.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Icon ---------------------------------------------
  icons: Icon[] = []

  getIcon(action?: () => any) {
    this.http.get(url + "/icon").subscribe((value: any) => {
      this.icons = value.data
      if (action) action()
    }, error => alert(error.error.detail))
  }

  createIcon() {
    this.http.post(url + "/icon", new Icon(), this.login.getHeader()).subscribe((value: any) => {
      this.icons.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateIcon(index: number) {
    this.http.post(url + "/icon", this.icons[index], this.login.getHeader()).subscribe((value: any) => {
      this.icons[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteIcon(index: number) {
    this.http.delete(url + "/icon" + this.icons[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.icons[index] = value.data
      this.icons.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- App ---------------------------------------------
  apps: App[] = []

  getApp() {
    this.http.get(url + "/app").subscribe((value: any) => {
      this.apps = value.data
    }, error => alert(error.error.detail))
  }

  createApp() {
    this.http.post(url + "/app", new App(), this.login.getHeader()).subscribe((value: any) => {
      this.apps.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateApp(index: number) {
    this.http.post(url + "/app", this.apps[index], this.login.getHeader()).subscribe((value: any) => {
      this.apps[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteApp(index: number) {
    this.http.delete(url + "/app/" + this.apps[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.apps[index] = value.data
      this.apps.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Widget ---------------------------------------------
  widgets: Widget[] = []
  widgetPage = 0
  widgetPageTotal = 0

  previousWidget() {
    if(this.widgetPage > 0)
    this.widgetPage--
    this.getWidget()
  }

  nextWidget() {
    if(this.widgetPage < this.widgetPageTotal)
    this.widgetPage++
    this.getWidget()
  }

  getWidget(action?: () => any) {
    this.http.get(url + "/widget?page=" + this.widgetPage).subscribe((value: any) => {
      this.widgets = value.data.content
      this.widgetPage = value.data.number
      this.widgetPageTotal = value.data.totalPages
      if (action) action()
    }, error => alert(error.error.detail))
  }

  getWidgetSimple(action?: () => any) {
    this.http.get(url + "/widget/simple").subscribe((value: any) => {
      this.widgets = value.data
      if (action) action()
    }, error => alert(error.error.detail))
  }

  createWidget() {
    this.http.post(url + "/widget", new Widget(), this.login.getHeader()).subscribe((value: any) => {
      this.widgets.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateWidget(index: number) {
    this.http.post(url + "/widget", this.widgets[index], this.login.getHeader()).subscribe((value: any) => {
      this.widgets[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteWidget(index: number) {
    this.http.delete(url + "/widget/" + this.widgets[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.widgets[index] = value.data
      this.widgets.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Widget Type ---------------------------------------------
  widgetTypes: WidgetType[] = []
  widgetTypePage = 0
  widgetTypePageTotal = 0

  previousWidgetType() {
    if(this.widgetTypePage > 0)
    this.widgetTypePage--
    this.getWidgetType()
  }

  nextWidgetType() {
    if(this.widgetTypePage < this.widgetTypePageTotal)
    this.widgetTypePage++
    this.getWidgetType()
  }

  getWidgetType() {
    this.http.get(url + "/widget/type").subscribe((value: any) => {
      this.widgetTypes = value.data.content
      for (let widgetType of this.widgetTypes) this.convert(widgetType)
      this.widgetTypePage = value.data.number
      this.widgetTypePageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }

  convert(widgetType: WidgetType) {
    if(widgetType.source){
      widgetType.sourceConvert = Object.entries(widgetType.source)
    }else {
      widgetType.sourceConvert = []
    }
  }

  unConvert(widgetType: WidgetType) {
    if (widgetType.sourceConvert) {
      widgetType.source = {}
      for(let [key, value] of widgetType.sourceConvert){
        widgetType.source[key] = value
      }
    } else {
      widgetType.source = new Map<string, string>();
    }
  }

  createWidgetType() {
    this.http.post(url + "/widget/type", new WidgetType(), this.login.getHeader()).subscribe((value: any) => {
      this.convert(value.data)
      this.widgetTypes.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateWidgetType(index: number) {
    this.unConvert(this.widgetTypes[index])
    this.http.post(url + "/widget/type", this.widgetTypes[index], this.login.getHeader()).subscribe((value: any) => {
      this.convert(value.data)
      this.widgetTypes[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteWidgetType(index: number) {
    this.http.delete(url + "/widget/type/" + this.widgetTypes[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.widgetTypes[index] = value.data
      this.widgetTypes.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Template ---------------------------------------------
  templates: Template[] = []
  templatePage = 0
  templatePageTotal = 0
  templateCategorySelection = 'all'

  previousTemplate() {
    if(this.templatePage > 0)
    this.templatePage--
    this.getTemplate()
  }

  nextTemplate() {
    if(this.templatePage < this.templatePageTotal)
    this.templatePage++
    this.getTemplate()
  }

  getTemplate() {
    this.http.get(url + "/template?page=" + this.templatePage + (this.templateCategorySelection === 'all'?'':'&category_id=' + this.templateCategorySelection)).subscribe((value: any) => {
      this.templates = value.data.content
      this.templatePage = value.data.number
      this.templatePageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }

  createTemplate() {
    this.http.post(url + "/template", new Template(), this.login.getHeader()).subscribe((value: any) => {
      this.templates.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateTemplate(index: number) {
    this.http.post(url + "/template", this.templates[index], this.login.getHeader()).subscribe((value: any) => {
      this.templates[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteTemplate(index: number) {
    this.http.delete(url + "/template/" + this.templates[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.templates[index] = value.data
      this.templates.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Style ---------------------------------------------
  styles: Style[] = []
  styleCategorySelect! : Category
  getStyle() {
    this.http.get(url + "/template/style" + ((this.styleCategorySelect)?("?category_id=" + this.styleCategorySelect.id):"")).subscribe((value: any) => {
      this.styles = value.data
    }, error => alert(error.error.detail))
  }

  createStyle() {
    this.http.post(url + "/template/style", new Style(), this.login.getHeader()).subscribe((value: any) => {
      this.styles.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateStyle(index: number) {
    this.http.post(url + "/template/style", this.styles[index], this.login.getHeader()).subscribe((value: any) => {
      this.styles[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteStyle(index: number) {
    this.http.delete(url + "/template/style/" + this.styles[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.styles[index] = value.data
      this.styles.splice(index, 1)
    }, error => alert(error.error.detail))
  }
}
