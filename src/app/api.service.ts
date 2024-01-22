import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login/login.service";
import {environment} from "./environment";
import {Alphabet, Sound, Template, TemplateType} from "./model/Model";


export const urlHost = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private login: LoginService) {
  }

  //--------------------------------- template ---------------------------------------------
  templates: Template[] = []
  templatePage : number = 0
  type!: TemplateType;
  public getTemplate() {
    let type = (this.type) ? "&type_id=" + this.type.id : ""
    this.http.get(urlHost + "/api/v1/template?edit=true&page=" + this.templatePage + type).subscribe((value: any) => {
      this.templates = value.data
    }, error => alert(error.error.detail))
  }

  public createTemplate() {
    this.http.post(urlHost + "/api/v1/template", new Template(), this.login.getHeader()).subscribe((value: any) => {
      this.templates.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  public updateTemplate(index: number) {
    this.http.post(urlHost + "/api/v1/template", this.templates[index], this.login.getHeader()).subscribe((value: any) => {
      this.templates[index] = value.data
    }, error => alert(error.error.detail))
  }

  public deleteTemplate(index: number) {
    this.http.delete(urlHost + "/api/v1/template/" + this.templates[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.templates[index] = value.data
      this.templates.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- alphabet ---------------------------------------------
  public alphabets: Alphabet[] = []
  alphabetPage : number = 0

  public getAlphabet() {
    this.http.get(urlHost + "/api/v1/alphabet?edit=true&page=" + this.alphabetPage ).subscribe((value: any) => {
      this.alphabets = value.data
    }, error => alert(error.error.detail))
  }

  public createAlphabet() {
    this.http.post(urlHost + "/api/v1/alphabet", new Alphabet(), this.login.getHeader()).subscribe((value: any) => {
      this.alphabets.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  public updateAlphabet(index: number) {
    this.http.post(urlHost + "/api/v1/alphabet", this.alphabets[index], this.login.getHeader()).subscribe((value: any) => {
      this.alphabets[index] = value.data
    }, error => alert(error.error.detail))
  }

  public deleteAlphabet(index: number) {
    this.http.delete(urlHost + "/api/v1/alphabet/" + this.alphabets[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.alphabets[index] = value.data
      this.alphabets.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- sound ---------------------------------------------
  public sounds: Sound[] = []
  soundPage : number = 0
  public getSound() {
    this.http.get(urlHost + "/api/v1/sound?edit=true&page=" + this.soundPage).subscribe((value: any) => {
      this.sounds = value.data
    }, error => alert(error.error.detail))
  }

  public createSound() {
    this.http.post(urlHost + "/api/v1/sound", new Sound(), this.login.getHeader()).subscribe((value: any) => {
      this.sounds.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  public updateSound(index: number) {
    this.http.post(urlHost + "/api/v1/sound", this.sounds[index], this.login.getHeader()).subscribe((value: any) => {
      this.sounds[index] = value.data
    }, error => alert(error.error.detail))
  }

  public deleteSound(index: number) {
    this.http.delete(urlHost + "/api/v1/sound/" + this.sounds[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.sounds[index] = value.data
      this.sounds.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- templateType ---------------------------------------------
  public templateTypes: TemplateType[] = []
  templateTypePage : number = 0
  public getTemplateType() {
    this.http.get(urlHost + "/api/v1/templateType?edit=true&page=" + this.templateTypePage).subscribe((value: any) => {
      this.templateTypes = value.data
    }, error => alert(error.error.detail))
  }

  public createTemplateType() {
    this.http.post(urlHost + "/api/v1/templateType", new TemplateType(), this.login.getHeader()).subscribe((value: any) => {
      this.templateTypes.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  public updateTemplateType(index: number) {
    this.http.post(urlHost + "/api/v1/templateType", this.templateTypes[index], this.login.getHeader()).subscribe((value: any) => {
      this.templateTypes[index] = value.data
    }, error => alert(error.error.detail))
  }

  public deleteTemplateType(index: number) {
    this.http.delete(urlHost + "/api/v1/templateType/" + this.templateTypes[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.templateTypes[index] = value.data
      this.templateTypes.splice(index, 1)
    }, error => alert(error.error.detail))
  }

}
