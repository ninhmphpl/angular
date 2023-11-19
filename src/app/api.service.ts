import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login/login.service";
import {environment} from "./environment";
import {Image, Music, Style, Trending, TrendingType} from "./model/Model";


export const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private login: LoginService) {
  }

  //--------------------------------- Trending ---------------------------------------------
  trendings: Trending[] = []

  getTrending() {
    this.http.get(url + "/now/v1/trending").subscribe((value: any) => {
      this.trendings = value.data
    }, error => alert(error.error.detail))
  }

  createTrending() {
    this.http.post(url + "/now/v1/trending", new Trending(), this.login.getHeader()).subscribe((value: any) => {
      this.trendings.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateTrending(index: number) {
    this.http.post(url + "/now/v1/trending", this.trendings[index], this.login.getHeader()).subscribe((value: any) => {
      this.trendings[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteTrending(index: number) {
    this.http.delete(url + "/now/v1/trending/" + this.trendings[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.trendings[index] = value.data
      this.trendings.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- TrendingType ---------------------------------------------
  trendingTypes: TrendingType[] = []

  getTrendingType() {
    this.http.get(url + "/now/v1/trendingType").subscribe((value: any) => {
      this.trendingTypes = value.data
    }, error => alert(error.error.detail))
  }

  createTrendingType() {
    this.http.post(url + "/now/v1/trendingType", new TrendingType(), this.login.getHeader()).subscribe((value: any) => {
      this.trendingTypes.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateTrendingType(index: number) {
    this.http.post(url + "/now/v1/trendingType", this.trendingTypes[index], this.login.getHeader()).subscribe((value: any) => {
      this.trendingTypes[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteTrendingType(index: number) {
    this.http.delete(url + "/now/v1/trendingType/" + this.trendingTypes[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.trendingTypes[index] = value.data
      this.trendingTypes.splice(index, 1)
    }, error => alert(error.error.detail))
  }


  //--------------------------------- Music ---------------------------------------------
  musics: Music[] = []

  getMusic() {
    this.http.get(url + "/now/v1/music").subscribe((value: any) => {
      this.musics = value.data
    }, error => alert(error.error.detail))
  }

  createMusic() {
    this.http.post(url + "/now/v1/music", new Music(), this.login.getHeader()).subscribe((value: any) => {
      this.musics.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateMusic(index: number) {
    this.http.post(url + "/now/v1/music", this.musics[index], this.login.getHeader()).subscribe((value: any) => {
      this.musics[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteMusic(index: number) {
    this.http.delete(url + "/now/v1/music/" + this.musics[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.musics[index] = value.data
      this.musics.splice(index, 1)
    }, error => alert(error.error.detail))
  }


  //--------------------------------- Style ---------------------------------------------
  styles: Style[] = []

  getStyle() {
    this.http.get(url + "/now/v1/style").subscribe((value: any) => {
      this.styles = value.data
    }, error => alert(error.error.detail))
  }

  createStyle() {
    this.http.post(url + "/now/v1/style", new Style(), this.login.getHeader()).subscribe((value: any) => {
      this.styles.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateStyle(index: number) {
    this.http.post(url + "/now/v1/style", this.styles[index], this.login.getHeader()).subscribe((value: any) => {
      this.styles[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteStyle(index: number) {
    this.http.delete(url + "/now/v1/style/" + this.styles[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.styles[index] = value.data
      this.styles.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Image ---------------------------------------------
  images: Image[] = []

  getImage() {
    this.http.get(url + "/now/v1/image").subscribe((value: any) => {
      this.images = value.data
    }, error => alert(error.error.detail))
  }

  createImage(action: (image: Image) => any) {
    this.http.post(url + "/now/v1/image", new Image(), this.login.getHeader()).subscribe((value: any) => {
      this.images.unshift(value.data)
      action(value.data)
    }, error => alert(error.error.detail))
  }

  updateImage(image: Image, action: (image: Image) => any) {
    this.http.post(url + "/now/v1/image", image, this.login.getHeader()).subscribe((value: any) => {
      action(value.data)
    }, error => alert(error.error.detail))
  }

  deleteImage(id: string, action: () => any) {
    this.http.delete(url + "/now/v1/image/" + id, this.login.getHeader()).subscribe((value: any) => {
      action()
    }, error => alert(error.error.detail))
  }

}
