import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login/login.service";
import {environment} from "./environment";
import {Alphabet, Template} from "./model/Model";


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
    this.http.get(urlHost + "/api/v1/template?edit=true").subscribe((value: any) => {
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
  public getAlphabet() {
    this.http.get(urlHost + "/api/v1/alphabet?edit=true").subscribe((value: any) => {
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

}
