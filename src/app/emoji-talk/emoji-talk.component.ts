import {Component, OnInit} from '@angular/core';
import {environment, errorAlert, successAlert} from "../environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-emoji-talk',
  templateUrl: './emoji-talk.component.html',
  styleUrls: ['./emoji-talk.component.scss']
})
export class EmojiTalkComponent implements OnInit{
  emojiTalksList : any[] = []
  formEmojiTalk : any = {name : '', data : ['a']};
  option : any;
  constructor(private http : HttpClient,
              private router: Router) {
  }
  ngOnInit(): void {
    let token: any = localStorage.getItem("Prox-Token");
    if (!token) {
      this.router.navigate(["/login"])
      return
    }
    // gán token
    this.option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
    this.getList()
  }
  getList(){
    let url = environment.urlEmoji + "/emoji-talk"
    this.http.get(url, this.option).subscribe((data : any)=>{
      if(data.code == 200){
        this.emojiTalksList = data.result
        for(let i = 0 ; i < this.emojiTalksList.length ; i ++){
          for( let j = 0; j < this.emojiTalksList[i].data.length ; j++){
            this.emojiTalksList[i].data[j] = this.emojiTalksList[i].data[j].join(",")
          }
        }
        console.log(this.emojiTalksList)
      } else{
        errorAlert("Error")
        this.router.navigate(["/login"])
      }
    })
  }

  save(emojiTalk : any){
    let url = environment.urlEmoji + "/emoji-talk"
    for(let i = 0 ; i < emojiTalk.data.length ; i++){
      emojiTalk.data[i] = emojiTalk.data[i].split(',')
    }
    console.log(emojiTalk)
    this.http.post(url, emojiTalk, this.option).subscribe((data : any)=>{
      if(data.code == 200) {
        successAlert("Saved")
        this.getList()
      }else {
        errorAlert("Error")
        this.router.navigate(["/login"])
      }
    })
  }
  delete(id : any){
    let url = environment.urlEmoji + "/emoji-talk/" + id
    this.http.delete(url, this.option).subscribe((data : any)=>{
      if(data.code == 200) {
        successAlert("Deleted")
        this.getList()
      }else {
        errorAlert("Error")
        this.router.navigate(["/login"])
      }
    })
  }

  deleteEmoji(indexEmojiTalk : number, indexEmoji : number){
    this.emojiTalksList[indexEmojiTalk].data.splice(indexEmoji, 1)
  }
}
