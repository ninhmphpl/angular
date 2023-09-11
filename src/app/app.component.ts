import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Home} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  domain = "http://localhost:8080";
  home! : Home;
  constructor(private http : HttpClient) {
    this.http.get(this.domain + "/pain/domain").subscribe((payload: any)=>{
      this.domain = payload.data.value
    }, (error : any)=>{
      alert(JSON.stringify(error))
    })
  }
  ngOnInit(): void {
    this.get()
  }
  get(){
    this.http.get(this.domain + "/pain/home").subscribe((payload : any)=>{
      this.home = payload.data
    }, (error : any)=>{
      alert(JSON.stringify(error))
    })
  }
  save(model : any){
    this.http.post(this.domain + "/pain/painting-style", model).subscribe((payload : any)=>{
      this.get()
    }, (error : any)=>{
      alert(JSON.stringify(error))
    })
  }

}
