import {Component, OnInit} from '@angular/core';
import {APIService} from "../service/api.service";
import {deleteAlert, form, errorAlert, successAlert, environment} from "../environments";
import {HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {uploadFile} from "../../lib/upload.socket";

@Component({
  selector: 'app-sound2',
  templateUrl: './sound2.component.html',
  styleUrls: ['./sound2.component.scss']
})
export class Sound2Component implements OnInit {
  sounds: any;
  option: any;
  url: any;
  urlUpload: any;

  constructor(private api: APIService,
              private router: Router) {
  }

  ngOnInit() {
    let token: any = localStorage.getItem("Prox-Token")
    if (!token) {
      this.backLogin()
      return
    } else {
      this.option = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: token
        })
      };
      this.url = environment.urlEmoji;
      this.urlUpload = environment.urlUpload;
      this.getList();
    }
  }

  getList() {
    let url = this.url + "/sound2/all"
    this.api.getMapping(url, this.option, (data: any) => {
      if (data.code === 200) {
        this.sounds = data.data
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else errorAlert("List Error: " + data.data.name)
    })
  }

  saveUpdate(i: number) {
    let url = this.url + "/sound2"
    this.api.putMapping(url, this.sounds[i], this.option, (data: any) => {
      if (data.code === 200) {
        successAlert("Update Complete")
        this.getList()
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("Update Error: " + data.data.name)
      }
    })
  }

  deleteById(i: number) {
    deleteAlert(() => {
      let url = this.url + "/sound2/" + this.sounds[i].id
      this.api.deleteMapping(url, this.option, (data: any) => {
        if (data.code === 200) {
          this.getList()
          successAlert("Delete Complete")
        } else if (data.code === 403) {
          this.backLogin()
          return
        } else {
          errorAlert("Delete Error: " + data.data.name)
        }
      })
    })
  }

  upSound(i: number, event: any) {
    let urlUpload = this.urlUpload + "/upload";
    let file: File = event.target.files[0];
    uploadFile(file, urlUpload, "sound2-emoji", (urlDownload: string) => {
      this.sounds[i].sound = urlDownload
      this.saveUpdate(i);
    })
  }

  upThumb(i: number, event: any) {
    let urlUpload = this.urlUpload + "/upload";
    let file: File = event.target.files[0];
    uploadFile(file, urlUpload, "thumb-sound-emoji", (urlDownload: string) => {
      this.sounds[i].thumb = urlDownload;
      this.saveUpdate(i)
    })
  }

  add() {
    this.sounds.push(JSON.parse(form.sound2Json))
  }

  saveAdd(i: any) {
    let url = this.url + "/sound2"
    this.api.postMapping(url, this.sounds[i], this.option, (data: any) => {
      if (data.code === 200) {
        this.getList()
        successAlert("Add complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("Add Error: " + data.data.name)
      }
    })
  }

  cancel(i: number) {
    this.sounds.splice(i, 1)
  }

  backLogin() {
    this.router.navigate(["/login"])
  }
}
