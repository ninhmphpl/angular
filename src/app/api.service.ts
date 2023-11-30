import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login/login.service";
import {environment} from "./environment";
import {FormIcon, Image, Music, Style, Trending, TrendingType} from "./model/Model";


export const urlHost = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private login: LoginService) {
  }

  //--------------------------------- Trending ---------------------------------------------
  trendings: Trending[] = []
  group!: string;

  getTrending() {
    let group = (this.group) ? "&group=" + this.group : ""
    this.http.get(urlHost + "/now/v1/trending?edit=true" + group).subscribe((value: any) => {
      this.trendings = value.data
    }, error => alert(error.error.detail))
  }

  createTrending() {
    this.http.post(urlHost + "/now/v1/trending", new Trending(), this.login.getHeader()).subscribe((value: any) => {
      this.trendings.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  createTrendingByUrl(url: string) {
    let trending = new Trending();
    trending.url = url
    this.http.post(urlHost + "/now/v1/trending", trending, this.login.getHeader()).subscribe((value: any) => {
      this.trendings.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateTrending(index: number) {
    this.http.post(urlHost + "/now/v1/trending", this.trendings[index], this.login.getHeader()).subscribe((value: any) => {
      this.trendings[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteTrending(index: number) {
    this.http.delete(urlHost + "/now/v1/trending/" + this.trendings[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.trendings[index] = value.data
      this.trendings.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- TrendingType ---------------------------------------------
  trendingTypes: TrendingType[] = []

  getTrendingType() {
    this.http.get(urlHost + "/now/v1/trendingType").subscribe((value: any) => {
      this.trendingTypes = value.data
    }, error => alert(error.error.detail))
  }

  createTrendingType(url? : string) {
    let trendingType = new Trending()
    if(url) trendingType.url = url
    this.http.post(urlHost + "/now/v1/trendingType", trendingType, this.login.getHeader()).subscribe((value: any) => {
      this.trendingTypes.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateTrendingType(index: number) {
    this.http.post(urlHost + "/now/v1/trendingType", this.trendingTypes[index], this.login.getHeader()).subscribe((value: any) => {
      this.trendingTypes[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteTrendingType(index: number) {
    this.http.delete(urlHost + "/now/v1/trendingType/" + this.trendingTypes[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.trendingTypes[index] = value.data
      this.trendingTypes.splice(index, 1)
    }, error => alert(error.error.detail))
  }


  //--------------------------------- Music ---------------------------------------------
  musics: Music[] = []

  getMusic() {
    this.http.get(urlHost + "/now/v1/music").subscribe((value: any) => {
      this.musics = value.data
    }, error => alert(error.error.detail))
  }

  createMusic(url?:string) {
    let music = new Music();
    if(url) music.url = url
    this.http.post(urlHost + "/now/v1/music", music, this.login.getHeader()).subscribe((value: any) => {
      this.musics.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateMusic(index: number) {
    this.http.post(urlHost + "/now/v1/music", this.musics[index], this.login.getHeader()).subscribe((value: any) => {
      this.musics[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteMusic(index: number) {
    this.http.delete(urlHost + "/now/v1/music/" + this.musics[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.musics[index] = value.data
      this.musics.splice(index, 1)
    }, error => alert(error.error.detail))
  }


  //--------------------------------- Style ---------------------------------------------
  styles: Style[] = []
  styleType!: string;

  getStyle() {
    let type = (this.styleType) ? "?type=" + this.styleType : ""
    this.http.get(urlHost + "/now/v1/style" + type).subscribe((value: any) => {
      this.styles = value.data
    }, error => alert(error.error.detail))
  }

  createStyle() {
    this.http.post(urlHost + "/now/v1/style", new Style(), this.login.getHeader()).subscribe((value: any) => {
      this.styles.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateStyle(index: number) {
    this.http.post(urlHost + "/now/v1/style", this.styles[index], this.login.getHeader()).subscribe((value: any) => {
      this.styles[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteStyle(index: number) {
    this.http.delete(urlHost + "/now/v1/style/" + this.styles[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.styles[index] = value.data
      this.styles.splice(index, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- Image ---------------------------------------------
  images: Image[] = []

  getImage() {
    this.http.get(urlHost + "/now/v1/image?type=sticker").subscribe((value: any) => {
      this.images = value.data
    }, error => alert(error.error.detail))
  }

  createImageSticker(url?:string) {
    let image = new Image()
    image.type = 'sticker'
    if(url) image.url = url
    this.http.post(urlHost + "/now/v1/image", image, this.login.getHeader()).subscribe((value: any) => {
      this.images.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  createImage(url : string | null , action: (image: Image) => any) {
    let image = new Image()
    if(url)image.url = url
    this.http.post(urlHost + "/now/v1/image", image, this.login.getHeader()).subscribe((value: any) => {
      this.images.unshift(value.data)
      action(value.data)
    }, error => alert(error.error.detail))
  }

  updateImage(image: Image, action: (image: Image) => any) {
    this.http.post(urlHost + "/now/v1/image", image, this.login.getHeader()).subscribe((value: any) => {
      action(value.data)
    }, error => alert(error.error.detail))
  }

  updateImageSticker(i: number) {
    this.http.post(urlHost + "/now/v1/image", this.images[i], this.login.getHeader()).subscribe((value: any) => {
      this.images[i] = value.data
    }, error => alert(error.error.detail))
  }

  deleteImage(id: string, action: () => any) {
    this.http.delete(urlHost + "/now/v1/image/" + id, this.login.getHeader()).subscribe((value: any) => {
      action()
    }, error => alert(error.error.detail))
  }

  deleteImageSticker(i: number) {
    this.http.delete(urlHost + "/now/v1/image/" + this.images[i].id, this.login.getHeader()).subscribe((value: any) => {
      this.images.splice(i, 1)
    }, error => alert(error.error.detail))
  }

  //--------------------------------- FormIcon ---------------------------------------------
  formIcons: FormIcon[] = []

  getFormIcon() {
    this.http.get(urlHost + "/now/v1/formIcon").subscribe((value: any) => {
      this.formIcons = value.data
    }, error => alert(error.error.detail))
  }

  createFormIcon() {
    let formIcon = new FormIcon();
    this.http.post(urlHost + "/now/v1/formIcon", formIcon, this.login.getHeader()).subscribe((value: any) => {
      this.formIcons.unshift(value.data)
    }, error => alert(error.error.detail))
  }

  updateFormIcon(index: number) {
    this.http.post(urlHost + "/now/v1/formIcon", this.formIcons[index], this.login.getHeader()).subscribe((value: any) => {
      this.formIcons[index] = value.data
    }, error => alert(error.error.detail))
  }

  deleteFormIcon(index: number) {
    this.http.delete(urlHost + "/now/v1/formIcon/" + this.formIcons[index].id, this.login.getHeader()).subscribe((value: any) => {
      this.formIcons[index] = value.data
      this.formIcons.splice(index, 1)
    }, error => alert(error.error.detail))
  }

}
