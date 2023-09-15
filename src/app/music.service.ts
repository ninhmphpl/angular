import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./Environment";

const urlPatrol = environment.url
@Injectable({
  providedIn: 'root'
})
export class MusicService {
  musics : any;
  constructor(private http : HttpClient) { }
  get() {
    this.http.get(urlPatrol + "/music?edit=true").subscribe((payload: any) => {
      if (payload.code == 200) {
        this.musics = payload.data
      } else {
        alert(payload.data)
      }
    }, (error: any) => {
      alert(JSON.stringify(error.error.detail))
    })
  }
}
