import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment, errorAlert, successAlert} from "../environments";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dataemoji2',
  templateUrl: './dataemoji2.component.html',
  styleUrls: ['./dataemoji2.component.scss']
})
export class Dataemoji2Component implements OnInit {
  urlEmoji: any;
  urlUpload: any;
  option: any;
  icons : any;
  dataEmojiV2 : any;
  // selectImg : any;

  constructor(private http: HttpClient, private router: Router) {
  }
  ngOnInit(): void {
    let token: any = localStorage.getItem("Prox-Token")
    if (!token) {
      this.router.navigate(["/login"]);
      return;
    }
    this.option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
    this.urlEmoji = environment.urlEmoji;
    this.getList();
    this.getListIcon();
  }
  getListIcon(){
    let url = this.urlEmoji + '/dataemoji/list/icon';
    this.http.get(url, this.option).subscribe((data : any)=>{
      console.log(data.data)
      this.icons = data.data;
    }, (error : any)=>{
      errorAlert("Error")
    })
  }
  getList(){
    let url = this.urlEmoji + "/dataemoji/all/v2"
    this.http.get(url, this.option).subscribe((data : any)=>{
      this.dataEmojiV2 = data.data;
      console.log(this.dataEmojiV2)
    }, (error : any)=>{
      errorAlert("Error")
    })
  }
  choiceImg! : HTMLImageElement;
  selectImg(urlImg : string){
    this.choiceImg.src = urlImg;
  }
  save(id : number | null, img1 : string, img2 : string, img3 : string, img4 : string, img5 : string){
    let url = this.urlEmoji + "/dataemoji/v2"
    let body = {
      id : id,
      unicode1 : img1,
      unicode2 : img2,
      unicode3 : img3,
      unicode4 : img4,
      unicode5 : img5,
    }
    this.http.post(url,body,this.option).subscribe((data : any)=>{
      successAlert("Save")
      this.getList()
    }, (error : any)=>{
      errorAlert("Error")
    })
  }

  delete(id : number){
    let url = this.urlEmoji + "/dataemoji/v2/" + id;
    this.http.delete(url, this.option).subscribe((data : any)=>{
      successAlert("Deleted");
      this.getList();
    }, (error : any)=>{
      errorAlert("Error")
    })
  }


}
