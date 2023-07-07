import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environment/environments";
import {HttpClient} from "@angular/common/http";
import {Sticker} from "../../model/Sticker";
const url = environment.url
@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit{
  stickers : Sticker[] = []
  constructor(private http : HttpClient) {
  }
  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.http.get(url + "/sticker/list").subscribe((payload : any)=>{
      if (payload.code == 200) this.stickers = payload.data
    }, (error : any) => {
      console.log(error)
    })
  }
  save(files : any){
    let formData = new FormData()
    if(files && files.length > 0){
      for(let file of files){
        formData.append("files", file)
      }
      this.http.post(url + "/sticker", formData).subscribe((payload : any)=>{
        if(payload.code == 200) this.getList()
      }, (error : any) => {
        console.log(error)
      })
    }
  }
  delete(id : any){
    this.http.delete(url + "/sticker/" + id).subscribe((payload : any)=>{
      if(payload.code == 200) this.getList()
    }, (error : any) => {
      console.log(error)
    })
  }
}
