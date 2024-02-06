import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";
import {LoginService} from "./login/login.service";
import {Audio, Filter, Model, Session, Type} from "./model/Color";

const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private login: LoginService) {
  }

  // crud model
  models: Model[] = []
  offset = 0;
  limit = 20;
  modelGet() {
    this.http.get(url + "/prox/api/model?edit=true&offset=" + this.offset + "&limit=" +this.limit).subscribe((value: any) => this.models = value.data, error => alert(error.error.detail))
  }
  modelCreate() {
    this.http.post(url + "/prox/api/model", new Model()).subscribe((value: any) => this.models.unshift(value.data), error => alert(error.error.detail))
  }
  modelUpdate(i : number) {
    this.http.post(url + "/prox/api/model", this.models[i]).subscribe((value: any) => this.models[i] = value.data, error => alert(error.error.detail))
  }
  modelDelete(i : number) {
    this.http.delete(url + "/prox/api/model/" + this.models[i].id).subscribe((value: any) => this.models.splice(i,1), error => alert(error.error.detail))
  }
  // crud type
  types: Type[] = []
  typeGet() {
    this.http.get(url + "/prox/api/type").subscribe((value: any) => this.types = value.data, error => alert(error.error.detail))
  }
  typeCreate() {
    this.http.post(url + "/prox/api/type", new Type()).subscribe((value: any) => this.types.unshift(value.data), error => alert(error.error.detail))
  }
  typeUpdate(i : number) {
    this.http.post(url + "/prox/api/type", this.types[i]).subscribe((value: any) => this.types[i] = value.data, error => alert(error.error.detail))
  }
  typeDelete(i : number) {
    this.http.delete(url + "/prox/api/type/" + this.types[i].id).subscribe((value: any) => this.types.splice(i,1), error => alert(error.error.detail))
  }
  // crud filter
  filters: Filter[] = []
  filterGet() {
    this.http.get(url + "/prox/api/filter").subscribe((value: any) => this.filters = value.data, error => alert(error.error.detail))
  }
  filterCreate() {
    this.http.post(url + "/prox/api/filter", new Filter()).subscribe((value: any) => this.filters.unshift(value.data), error => alert(error.error.detail))
  }
  filterUpdate(i : number) {
    this.http.post(url + "/prox/api/filter", this.filters[i]).subscribe((value: any) => this.filters[i] = value.data, error => alert(error.error.detail))
  }
  filterDelete(i : number) {
    this.http.delete(url + "/prox/api/filter/" + this.filters[i].id).subscribe((value: any) => this.filters.splice(i,1), error => alert(error.error.detail))
  }

  // crud audio
  audios: Audio[] = []
  audioGet() {
    this.http.get(url + "/prox/api/audio").subscribe((value: any) => this.audios = value.data, error => alert(error.error.detail))
  }
  audioCreate() {
    this.http.post(url + "/prox/api/audio", new Audio()).subscribe((value: any) => this.audios.unshift(value.data), error => alert(error.error.detail))
  }
  audioUpdate(i : number) {
    this.http.post(url + "/prox/api/audio", this.audios[i]).subscribe((value: any) => this.audios[i] = value.data, error => alert(error.error.detail))
  }
  audioDelete(i : number) {
    this.http.delete(url + "/prox/api/audio/" + this.audios[i].id).subscribe((value: any) => this.audios.splice(i,1), error => alert(error.error.detail))
  }

  // crud session
  sessions: Session[] = []
  sessionGet() {
    this.http.get(url + "/prox/api/session").subscribe((value: any) => this.sessions = value.data, error => alert(error.error.detail))
  }
  sessionCreate() {
    this.http.post(url + "/prox/api/session", new Session()).subscribe((value: any) => this.sessions.unshift(value.data), error => alert(error.error.detail))
  }
  sessionUpdate(i : number) {
    this.http.post(url + "/prox/api/session", this.sessions[i]).subscribe((value: any) => this.sessions[i] = value.data, error => alert(error.error.detail))
  }
  sessionDelete(i : number) {
    this.http.delete(url + "/prox/api/session/" + this.sessions[i].id).subscribe((value: any) => this.sessions.splice(i,1), error => alert(error.error.detail))
  }


}
