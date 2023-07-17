import {Component, OnInit} from '@angular/core';
import {deleteAlert, environment, errorAlert, successAlert} from "../environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {IosIcon} from "../../model/IosIcon";
import {IosEmojiTalk} from "../../model/IosEmojiTalk";

const url = environment.urlEmoji

@Component({
  selector: 'app-ios-emoji-talk',
  templateUrl: './ios-emoji-talk.component.html',
  styleUrls: ['./ios-emoji-talk.component.scss']
})
export class IosEmojiTalkComponent implements OnInit {
  location: any = {data: null, x: null};
  formCreate: IosEmojiTalk = {
    id: null,
    name: "Name",
    data: []
  }
  iosIcons: IosIcon[] = []
  iosEmojiTalks: IosEmojiTalk[] = []
  option: any

  constructor(private http: HttpClient,
              private router: Router) {
  }

  setImg(url: any) {
    this.location.data[this.location.x] = url;
  }

  ngOnInit(): void {
    this.getToken()
    this.getListIcon()
    this.getList()

  }

  getList() {
    this.http.get(url + "/ios/emoji-talk").subscribe((payload: any) => {
      if (payload.code == 200) {
        this.iosEmojiTalks = payload.data
        console.log(this.iosEmojiTalks)
      } else {
        errorAlert("Error code " + payload.code + ", will back login")
        this.router.navigate(['/login'])
      }
    }, (error: any) => {
      errorAlert(JSON.stringify(error))
    })
  }

  getToken() {
    let token: any = localStorage.getItem("Prox-Token")
    if (!token) {
      this.router.navigate(["/login"])
      return
    }
    this.option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
  }

  getListIcon() {
    this.http.get(url + "/ios/icon").subscribe((payload: any) => {
      if (payload.code == 200) this.iosIcons = payload.data
      else {
        errorAlert("Error code " + payload.code + ", will back login")
        this.router.navigate(['/login'])
      }
    }, (error: any) => {
      errorAlert(JSON.stringify(error))
    })
  }

  save(iosEmojiTalk: IosEmojiTalk) {
    console.log(iosEmojiTalk)
    this.http.post(url + "/ios/emoji-talk", iosEmojiTalk, this.option).subscribe((payload: any) => {
      if (payload.code == 200) {
        this.getList()
        successAlert("Ok")
      } else {
        errorAlert("Error code " + payload.code + ", will back login")
        this.router.navigate(['/login'])
      }
    }, (error: any) => {
      errorAlert(JSON.stringify(error))
    })
  }

  delete(id: any) {
    deleteAlert(() => {
      this.http.delete(url + "/ios/emoji-talk/" + id).subscribe((payload: any) => {
        if (payload.code == 200) this.getList()
        else {
          errorAlert("Error code " + payload.code + ", will back login")
          this.router.navigate(['/login'])
        }
      }, (error: any) => {
        errorAlert(JSON.stringify(error))
      })
    })

  }
}
