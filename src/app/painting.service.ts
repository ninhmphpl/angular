import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Style} from "./model/style";
import {Painting} from "./model/painting";
import {environment} from "../enviroments/environment";


@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  url = environment.url
  styles: Style[] = []
  banner: Painting[] = []
  artisAndMagic: Painting[] = []
  features: Painting[] = []
  aiRemove: Painting[] = []
  key: string[] = []

  constructor(private http: HttpClient) {
  }

  get(painting ? : (pain : PaintingService)=> any) {
    this.getStyle()
    this.getPainting(painting)
    this.getKey()
  }

  getStyle() {
    this.http.get(this.url + "/style").subscribe((payload: any) => {
      this.styles = payload.data
    }, error => {
      alert(error.error.detail)
    })
  }

  getPainting(get? : (get : any) => any) {
    this.http.get(this.url + "/pain/home").subscribe((payload: any) => {
      this.banner = payload.data.banner;
      this.aiRemove = payload.data.aiRemover;
      this.features = payload.data.features;
      this.artisAndMagic = []
      this.artisAndMagic.push(payload.data.magicPainting, payload.data.artis)
      if(get) get(this)
    }, error => {
      alert(error.error.detail)
    })
  }

  getKey() {
    this.http.get(this.url + "/key").subscribe((payload: any) => {
      this.key = payload.data
      this.key.sort((a, b) => a.localeCompare(b))
    }, error => {
      alert(error.error.detail)
    })
  }

  savePain(pain: Painting, getPain: (pain: Painting) => any) {
    this.http.post(this.url + "/pain", pain).subscribe((payload: any) => {
      getPain(payload.data)
    }, error => {
      alert(error.error.detail)
    })
  }

  deletePain(id: string, result: () => any) {
    if(confirm("Delete ?")){
      this.http.delete(this.url + "/pain/" + id).subscribe((payload: any) => {
        result()
      }, error => {
        alert(error.error.detail)
      })
    }
  }

  saveStyle(style: Style, getStyle: (style: Style) => any) {
    this.http.post(this.url + "/style", style).subscribe((payload: any) => {
      getStyle(payload.data)
    }, error => {
      alert(error.error.detail)
    })
  }

  deleteStyle(style: Style, result: () => any) {
    if(confirm("Delete ?")){
      this.http.delete(this.url + "/style/" + style.id).subscribe((payload: any) => {
        result()
      }, error => {
        alert(error.error.detail)
      })
    }
  }

  saveKey(key: string, action : ()=> any) {
    this.http.post(this.url + "/key", {name: key}).subscribe((payload: any) => {
      if (this.key.indexOf(payload.data.name) == -1) this.key.push(payload.data.name)
      this.key.sort((a, b) => a.localeCompare(b))
      action()
    }, error => {
      alert(error.error.detail)
    })
  }

  deleteKey(key: string, action : ()=> any) {
    if(confirm("Delete ?")){
      this.http.delete(this.url + "/key/" + key).subscribe((payload: any) => {
        this.key.splice(this.key.indexOf(key), 1)
        action()
      }, error => {
        alert(error.error.detail)
      })
    }

  }

}
