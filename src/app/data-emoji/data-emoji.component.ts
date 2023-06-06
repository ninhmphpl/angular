import {Component, OnInit} from '@angular/core';
import {APIService} from "../service/api.service";
import {form, errorAlert, successAlert, environment} from "../environments";
import Swal from 'sweetalert2'
import {HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-data-emoji',
  templateUrl: './data-emoji.component.html',
  styleUrls: ['./data-emoji.component.scss']
})
export class DataEmojiComponent implements OnInit {
  dataEmoji: any;
  listEmoji = form.emoji
  option: any;
  url : any;

  constructor(private api: APIService,
              private router: Router) {
  }

  ngOnInit(): void {
    let token: any = localStorage.getItem("Prox-Token")
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
    this.url = environment.urlEmoji;
    this.getList()
  }

  getList() {
    let url = this.url + "/dataemoji/all"
    this.api.getMapping(url, this.option, (data: any) => {
      if (data.code === 200) {
        this.dataEmoji = data.data
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("List Error: " + data.data.name)
      }
    })
  }

  add(i: number) {
    let url = this.url + "/dataemoji"
    this.api.postMapping(url, this.dataEmoji[i], this.option, (data: any) => {
      if (data.code === 200) {
        this.dataEmoji[i] = data.data
        successAlert("Add complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("Add Error: " + data.data.name)
      }
    })
  }

  save(i: any) {
    let url = this.url + "/dataemoji"
    this.api.putMapping(url, this.dataEmoji[i], this.option, (data: any) => {
      if (data.code === 200) {
        this.dataEmoji[i] = data.data
        successAlert("Save complete")
      } else if (data.code === 403) {
        this.backLogin()
        return
      } else {
        errorAlert("Save Error: " + data.data.name)
      }
    })
  }

  deleteDataEmoji(i: any) {
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
        let url = this.url + "/dataemoji/" + this.dataEmoji[i].id
        this.api.deleteMapping(url, this.option, (data: any) => {
          if (data.code === 200) {
            this.dataEmoji.splice(i, 1)
            successAlert("Delete success")
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

  create() {
    this.dataEmoji.push(JSON.parse(form.emojiDataJson))
  }

  cancel(i: number) {
    this.dataEmoji.splice(i, 1)
  }

  backLogin() {
    this.router.navigate(["/login"])
  }

}
