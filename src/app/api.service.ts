import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";
import {LoginService} from "./login/login.service";
import {Banner} from "./model/Banner";
import {Style} from "./model/Style";
import {Video} from "./model/Video";
import {VideoStyle} from "./model/VideoStyle";
import {Intro} from "./model/Intro";
const url = environment.url
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //--------------------------------- Banner ---------------------------------------------
  banners : Banner[] = []
  bannerPage : number = 0
  bannerPageTotal : number = 0
  constructor(private http : HttpClient, private login : LoginService) { }
  getBanner(page : number){
    this.http.get(url + "/art-ai/now/banner?page=" + page).subscribe((value : any) => {
      this.bannerPage = value.data.number
      this.banners = value.data.content
      this.bannerPageTotal = value.data.totalPages
    })
  }
  createBanner(){
    this.http.post(url + "/art-ai/now/banner", new Banner(), this.login.getHeader()).subscribe((value : any) => {
      this.banners.unshift(value.data)
    })
  }
  updateBanner(index : number){
    this.http.post(url + "/art-ai/now/banner", this.banners[index], this.login.getHeader()).subscribe((value : any) => {
      this.banners[index] = value.data
    })
  }
  deleteBanner(index : number){
    this.http.delete(url + "/art-ai/now/banner/" + this.banners[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.banners[index] = value.data
      this.banners.splice(index, 1)
    })
  }

  //--------------------------------- Style ---------------------------------------------

  styles : Style[] = []
  stylePage : number = 0
  stylePageTotal : number = 0
  getStyle(page : number){
    this.http.get(url + "/art-ai/now/style?page=" + page).subscribe((value : any) => {
      this.stylePage = value.data.number
      this.styles = value.data.content
      this.stylePageTotal = value.data.totalPages
    })
  }
  createStyle(){
    this.http.post(url + "/art-ai/now/style", new Style(), this.login.getHeader()).subscribe((value : any) => {
      this.styles.unshift(value.data)
    })
  }
  updateStyle(index : number){
    this.http.post(url + "/art-ai/now/style", this.styles[index], this.login.getHeader()).subscribe((value : any) => {
      this.styles[index] = value.data
    })
  }
  deleteStyle(index : number){
    this.http.delete(url + "/art-ai/now/style/" + this.styles[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.styles[index] = value.data
      this.styles.splice(index, 1)
    })
  }

  //--------------------------------- Video ------------------------------------

  videos : Video[] = []
  videoPage : number = 0
  videoPageTotal : number = 0
  getVideo(page : number){
    this.http.get(url + "/art-ai/now/video?page=" + page).subscribe((value : any) => {
      this.videoPage = value.data.number
      this.videos = value.data.content
      this.videoPageTotal = value.data.totalPages
    })
  }
  createVideo(){
    this.http.post(url + "/art-ai/now/video", new Video(), this.login.getHeader()).subscribe((value : any) => {
      this.videos.unshift(value.data)
    })
  }
  updateVideo(index : number){
    this.http.post(url + "/art-ai/now/video", this.videos[index], this.login.getHeader()).subscribe((value : any) => {
      this.videos[index] = value.data
    })
  }
  deleteVideo(index : number){
    this.http.delete(url + "/art-ai/now/video/" + this.videos[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.videos[index] = value.data
      this.videos.splice(index, 1)
    })
  }

  //--------------------------------- Video Type ------------------------------------

  videoStyles : VideoStyle[] = []
  videoStylePage : number = 0
  videoStylePageTotal : number = 0
  getVideoStyle(page : number){
    this.http.get(url + "/art-ai/now/style-video?page=" + page).subscribe((value : any) => {
      this.videoStylePage = value.data.number
      this.videoStyles = value.data.content
      this.videoStylePageTotal = value.data.totalPages
    })
  }
  createVideoStyle(){
    this.http.post(url + "/art-ai/now/style-video", new VideoStyle(), this.login.getHeader()).subscribe((value : any) => {
      this.videoStyles.unshift(value.data)
    })
  }
  updateVideoStyle(index : number){
    this.http.post(url + "/art-ai/now/style-video", this.videoStyles[index], this.login.getHeader()).subscribe((value : any) => {
      this.videoStyles[index] = value.data
    })
  }
  deleteVideoStyle(index : number){
    this.http.delete(url + "/art-ai/now/style-video/" + this.videoStyles[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.videoStyles[index] = value.data
      this.videoStyles.splice(index, 1)
    })
  }

  //--------------------------------- Video Type ------------------------------------

  intros : Intro[] = []
  introPage : number = 0
  introPageTotal : number = 0
  getIntro(page : number){
    this.http.get(url + "/art-ai/now/intro?page=" + page).subscribe((value : any) => {
      this.introPage = value.data.number
      this.intros = value.data.content
      this.introPageTotal = value.data.totalPages
    })
  }
  createIntro(){
    this.http.post(url + "/art-ai/now/intro", new Intro(), this.login.getHeader()).subscribe((value : any) => {
      this.intros.unshift(value.data)
    })
  }
  updateIntro(index : number){
    this.http.post(url + "/art-ai/now/intro", this.intros[index], this.login.getHeader()).subscribe((value : any) => {
      this.intros[index] = value.data
    })
  }
  deleteIntro(index : number){
    this.http.delete(url + "/art-ai/now/intro/" + this.intros[index].id, this.login.getHeader()).subscribe((value : any) => {
      this.intros[index] = value.data
      this.intros.splice(index, 1)
    })
  }
}
