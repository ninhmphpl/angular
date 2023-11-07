import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";
import {LoginService} from "./login/login.service";
import {Category, AiPoster, Theme, AiProfile, AiPosterOption, Template} from "./model/ThemeModel";

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

  getCategory(type?: string) {
    this.http.get(url + "/now/category" + ((type != null) ? ("?type=" + type) : "")).subscribe((value: any) => {
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

  //--------------------------------- Ai Poster ---------------------------------------------
  aiPosters: AiPoster[] = []
  aiPosterSuggests: AiPosterOption[] = []
  aiPosterTricks: AiPosterOption[] = []

  getAiPoster() {
    this.http.get(url + "/now/ai-poster").subscribe((value: any) => {
      this.aiPosters = value.data
    }, error => alert(error.error.detail))
  }

  getAiPosterHome() {
    this.http.get(url + "/now/ai-poster/home").subscribe((value: any) => {
      this.aiPosters = value.aiPoster
      this.aiPosterSuggests = value.suggest
      this.aiPosterTricks = value.tricks
    }, error => alert(error.error.detail))
  }

  createAiPoster() {
    this.http.post(url + "/now/ai-poster", new AiPoster(), this.login.getHeader()).subscribe((value: any) => {
      this.aiPosters.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateAiPoster(index: number) {
    this.http.post(url + "/now/ai-poster", this.aiPosters[index], this.login.getHeader()).subscribe((value: any) => {
      this.aiPosters[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteAiPoster(index: number) {
    this.http.delete(url + "/now/ai-poster/" + this.aiPosters[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.aiPosters.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Ai Poster Option ---------------------------------------------
  createAiPosterOptionTricks() {
    let a = new AiPosterOption();
    a.type = "trick"
    this.http.post(url + "/now/ai-poster/option", a, this.login.getHeader()).subscribe((value: any) => {
      this.aiPosterTricks.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateAiPosterOptionTricks(index: number) {
    this.http.post(url + "/now/ai-poster/option", this.aiPosterTricks[index], this.login.getHeader()).subscribe((value: any) => {
      this.aiPosterTricks[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteAiPosterOptionTricks(index: number) {
    this.http.delete(url + "/now/ai-poster/option/" + this.aiPosterSuggests[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.aiPosterTricks.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  createAiPosterOptionSuggests() {
    let a = new AiPosterOption();
    a.type = "suggestion"
    this.http.post(url + "/now/ai-poster/option", a, this.login.getHeader()).subscribe((value: any) => {
      this.aiPosterSuggests.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateAiPosterOptionSuggest(index: number) {
    this.http.post(url + "/now/ai-poster/option", this.aiPosterSuggests[index], this.login.getHeader()).subscribe((value: any) => {
      this.aiPosterSuggests[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteAiPosterOptionSuggest(index: number) {
    this.http.delete(url + "/now/ai-poster/option/" + this.aiPosterSuggests[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.aiPosterSuggests.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- AiProfile ---------------------------------------------
  aiProfiles: AiProfile[] = []
  aiProfilePage = 0;
  aiProfilePageTotal = 0;
  aiProfileCategory!:Category

  nextAiProfile() {
    if (this.aiProfilePage < this.aiProfilePageTotal) {
      this.aiProfilePage++
      this.getAiProfile()
    }
  }

  previousAiProfile() {
    if (this.aiProfilePage > 0) {
      this.aiProfilePage--
      this.getAiProfile()
    }
  }

  getAiProfile() {
    this.http.get(url + "/now/ai-profile?page=" + this.aiProfilePage + ((this.aiProfileCategory)?("&category_id=" + this.aiProfileCategory.id):"")).subscribe((value: any) => {
      this.aiProfiles = value.data.content
      this.aiProfilePage = value.data.number
      this.aiProfilePageTotal = value.data.totalPages
    }, error => alert(error.error.detail))
  }

  createAiProfile() {
    this.http.post(url + "/now/ai-profile", new AiProfile(), this.login.getHeader()).subscribe((value: any) => {
      this.aiProfiles.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateAiProfile(index: number) {
    this.http.post(url + "/now/ai-profile", this.aiProfiles[index], this.login.getHeader()).subscribe((value: any) => {
      this.aiProfiles[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteAiProfile(index: number) {
    this.http.delete(url + "/now/ai-profile/" + this.aiProfiles[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.aiProfiles.splice(index, 1)
    }, error => alert(error.error.detail))
  }


  //--------------------------------- Template ---------------------------------------------
  templates: Template[] = []
  templatePage = 0;
  templatePageTotal = 0;
  templateCategory!:Category

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
    this.http.get(url + "/now/template?page=" + this.templatePage + ((this.templateCategory)?("&category_id=" + this.templateCategory.id):"")).subscribe((value: any) => {
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
