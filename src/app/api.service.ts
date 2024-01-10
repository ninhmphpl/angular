import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login/login.service";
import {environment} from "./environment";
import {Music, Group, Template} from "./model/Model";


export const urlHost = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private login: LoginService) {
  }

  //--------------------------------- Template ---------------------------------------------
  templates: Template[] = []
  group: Group | null = null;

  getTemplate() {
    let group = (this.group) ? "&group_id=" + this.group.id : ""
    this.http.get(urlHost + "/edit/couple/template?edit=true&version=100" + group, this.login.getHeader()).subscribe((value: any) => {
      this.templates = value.data
    }, error => alert(error.error.detail))
  }

  createTemplate() {
    this.http.post(urlHost + "/edit/couple/template", new Template(), this.login.getHeader()).subscribe((value: any) => {
      this.templates.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateTemplate(index: number) {
    this.http.post(urlHost + "/edit/couple/template", this.templates[index], this.login.getHeader()).subscribe((value: any) => {
      this.templates[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteTemplate(index: number) {
    this.http.delete(urlHost + "/edit/couple/template/" + this.templates[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.templates[index] = value.data
      this.templates.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Group ---------------------------------------------
  groups: Group[] = []

  getGroup() {
    this.http.get(urlHost + "/edit/couple/group?edit=true&version=100", this.login.getHeader()).subscribe((value: any) => {
      this.groups = value.data
    }, error => alert(error.error.detail))
  }

  createGroup() {
    this.http.post(urlHost + "/edit/couple/group", new Group(), this.login.getHeader()).subscribe((value: any) => {
      this.groups.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateGroup(index: number) {
    this.http.post(urlHost + "/edit/couple/group", this.groups[index], this.login.getHeader()).subscribe((value: any) => {
      this.groups[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteGroup(index: number) {
    this.http.delete(urlHost + "/edit/couple/group/" + this.groups[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.groups[index] = value.data
      this.groups.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Music ---------------------------------------------
  musics: Music[] = []

  getMusic() {
    console.log(this.login.getHeader().headers)
    this.http.get(urlHost + "/edit/couple/music?edit=true&version=100", this.login.getHeader()).subscribe((value: any) => {
      this.musics = value.data
    }, error => alert(error.error.detail))
  }

  createMusic() {
    this.http.post(urlHost + "/edit/couple/music", new Music(), this.login.getHeader()).subscribe((value: any) => {
      this.musics.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateMusic(index: number) {
    this.http.post(urlHost + "/edit/couple/music", this.musics[index], this.login.getHeader()).subscribe((value: any) => {
      this.musics[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteMusic(index: number) {
    this.http.delete(urlHost + "/edit/couple/music/" + this.musics[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.musics[index] = value.data
      this.musics.splice(index, 1)
    }, error => alert(error.error.detail))
  }


}
