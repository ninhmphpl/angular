import {Component, OnInit} from '@angular/core';
import {Music} from "../model/Music";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment, getHeader, uploadFile} from "../Environment";
import {Upload} from "../model/Upload";

const urlPatrol = environment.url
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  uploadList: Upload[] = []
  musics: Music[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.get()
  }

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

  save(music : Music, action : (music : Music)=> any) {
    this.http.post(urlPatrol + "/music", music,getHeader()).subscribe((payload: any) => {
      action(payload.data)
      // alert("OK")
    }, (error: any) => {
      alert(JSON.stringify(error.error.detail))
    })
  }

  delete(index: number) {
    this.http.delete(urlPatrol + "/music/" + this.musics[index].id,getHeader()).subscribe((payload: any) => {
      if (payload.code == 200) {
        this.musics.splice(index, 1)
        alert(payload.data)
      } else {
        alert(payload.data)
      }
    }, (error: any) => {
      alert(JSON.stringify(error.error.detail))
    })
  }
  create() {
    this.save(new Music(), music => this.musics.unshift(music))
  }
  saveMusic(i : number){
    this.save(this.musics[i], music => this.musics[i] = music)
  }



}
