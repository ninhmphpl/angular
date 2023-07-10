import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {deleteAlert, environment, errorAlert, successAlert} from "../environments";
import {EmojiFrame} from "../model/EmojiFrame";
import {uploadFile} from "../../lib/upload.socket";

const url = environment.urlUpload2

@Component({
  selector: 'app-emoji-frame',
  templateUrl: './emoji-frame.component.html',
  styleUrls: ['./emoji-frame.component.scss']
})
export class EmojiFrameComponent implements OnInit {
  group = "Emoji_Frame"
  emojiFrames: EmojiFrame[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.http.get(url + "/data/v2/" + this.group).subscribe((payload: any) => {
      if (payload.code) this.emojiFrames = payload.data;
      else errorAlert("Some thing error code: " + payload.code)
    }, (error: any) => {
      errorAlert(error)
    })
  }

  uploadFile(files: any) {
    let i = 0;
    for (let file of files) {
      uploadFile(file, `${url}/upload2`.replace("http://", "ws://"), this.group, (data: string) => {
        successAlert(file.name + "done")
        if(++i >= files.length) this.getList()
      })
    }
  }
  update(emojiFrame: EmojiFrame) {
    this.http.post(url + "/data/v2", emojiFrame).subscribe((payload: any) => {
      if (payload.code == 200) {
        successAlert("Ok")
        this.getList()
      } else {
        errorAlert("Error code : " + payload.code)
      }
    }, (error: any) => {
      errorAlert(error)
    })
  }

  delete(id: number) {
    deleteAlert(()=>{
      this.http.delete(url + "/data/v2/" + id).subscribe((payload: any) => {
        if (payload.code == 200){
          successAlert("Ok")
          this.getList()
        }
      })
    })
  }
}
