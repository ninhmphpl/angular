import {Component, OnInit} from '@angular/core';
import {APIService} from "../service/api.service";
import {environment, errorAlert, successAlert} from "../environments";
import Swal from "sweetalert2";
import {HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {
  emojis: any;
  a: any
  option: any

  constructor(private api: APIService, private router: Router) {
  }

  ngOnInit(): void {
    this.getList()
    let token: any = localStorage.getItem("Prox-Token");
    if (!token) {
      this.backLogin()
      return
    }
    this.option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
  }

  getList() {
    let url = environment.host + "/emoji/all"
    this.api.getMapping(url, {}, (data: any) => {
      if(data.code === 200){
        this.emojis = data.data
      } else if (data.code === 403) {
        this.backLogin()
        return
      }else {
        errorAlert("List Error: " + data.data.name)
      }

    })
  }

  update(emoji: any) {
    let url = environment.host + "/emoji"
    this.api.putMapping(url, emoji, this.option, (data: any) => {
      if (data.code === 200) {
        successAlert("Save Complete")
        this.getList()
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("Update error: " + data.data.name)
      }

    })
  }

  create(emoji: any) {
    let url = environment.host + "/emoji"
    this.api.postMapping(url, emoji, this.option, (data: any) => {
        if (data.code === 200) {
          successAlert("Create complete")
          this.getList()
        } else if (data.code === 403) {
          this.backLogin()
          return
        } else {
          errorAlert("Create Error: " + data.data.name)
        }
      }
    )
  }

  deleteById(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let url = environment.host + "/emoji/" + id
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
      }
    })
  }

  upThumb(i: number, event: any) {
    this.emojis[i].avatarUpload = true;
    let url = environment.host + "/upload"
    let formData: FormData = new FormData();
    formData.append("files", event.target.files[0])
    this.api.postMapping(url, formData, this.api.headerFromData(), (data: any) => {
      if (data.code === 200) {
        this.emojis[i].thumbnail = environment.host + data.data[0]
        successAlert("Upload Complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("Upload Error: " + data.data.name)
      }
      this.emojis[i].avatarUpload = false;
    })
  }

  upVideo(i: number, event: any) {
    this.emojis[i].videoUpload = true;
    let url = environment.host + "/upload"
    let formData: FormData = new FormData();
    formData.append("files", event.target.files[0])
    this.api.postMapping(url, formData, this.api.headerFromData(), (data: any) => {
      if (data.code === 200) {
        this.emojis[i].linkVideo = environment.host + data.data[0]
        successAlert("Upload Complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("Upload Error: " + data.data.name)
      }
      this.emojis[i].videoUpload = false;
    })
  }

  add() {
    this.emojis.push(JSON.parse(environment.emojiJson))
  }

  cancel(index: number) {
    this.emojis.splice(index, 1)
  }

  backLogin(){
    this.router.navigate(["/login"] )
  }



}
