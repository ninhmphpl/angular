import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Style} from "./model/style";
import {Painting} from "./model/painting";
import {environment} from "../enviroments/environment";

const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  styles: Style[] = []
  banner: Painting[] = []
  artisAndMagic: Painting[] = []
  features: Painting[] = []
  aiRemove: Painting[] = []
  key: string[] = []

  constructor(private http: HttpClient) {
  }

  get() {
    this.getStyle()
    this.getPainting()
    this.getKey()
  }

  getStyle() {
    this.http.get(url + "/style").subscribe((payload: any) => {
      this.styles = payload.data
    }, error => {
      alert(error.error.detail)
    })
  }

  getPainting() {
    this.http.get(url + "/pain/home").subscribe((payload: any) => {
      this.banner = payload.data.banner;
      this.aiRemove = payload.data.aiRemover;
      this.features = payload.data.features;
      this.artisAndMagic = []
      this.artisAndMagic.push(payload.data.magicPainting, payload.data.artis)
    }, error => {
      alert(error.error.detail)
    })
  }

  getKey() {
    this.http.get(url + "/key").subscribe((payload: any) => {
      this.key = payload.data
    }, error => {
      alert(error.error.detail)
    })
  }

  savePain(pain: Painting, getPain: (pain: Painting) => any) {
    this.http.post(url + "/pain", pain).subscribe((payload: any) => {
      getPain(payload.data)
    }, error => {
      alert(error.error.detail)
    })
  }

  deletePain(id: string, result: () => any) {
    this.http.delete(url + "/pain/" + id).subscribe((payload: any) => {
      result()
    }, error => {
      alert(error.error.detail)
    })
  }

}
