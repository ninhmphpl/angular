import {Component, OnInit} from '@angular/core';
import {APIService} from "./APIService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  test : {time : number, body : any}[] = []
  method : string = "GET"
  url : string = ""
  header : string = ""
  params : string = ""
  body : string = ""
  numberRequest : number = 1;
  constructor(private api : APIService) {
  }
  ngOnInit(): void {
  }

  public post(){
    for(let i = 0; i < this.numberRequest; i++){
      let a = Date.now();
      this.api.postMapping(this.url,JSON.parse(this.body), (data : any)=>{
        this.test.push({time : Date.now() - a, body :  data})
      })
    }
  }
  public get(){
    for(let i = 0; i < this.numberRequest; i++){
      let a = Date.now();
      this.api.getMapping(this.url, (data : any)=>{
        this.test.push({time : Date.now() - a, body :  data})
      })
    }
  }
  public put(){
    for(let i = 0; i < this.numberRequest; i++){
      let a = Date.now();
      this.api.putMapping(this.url,JSON.parse(this.body), (data : any)=>{
        this.test.push({time : Date.now() - a, body :  data})
      })
    }
  }
  public delete(){
    for(let i = 0; i < this.numberRequest; i++){
      let a = Date.now();
      this.api.deleteMapping(this.url, (data : any)=>{
        this.test.push({time : Date.now() - a, body :  data})
      })
    }
  }

  public send(){
    this.test = []
    switch (this.method){
      case "GET" :
        this.get();
        break;
      case "POST":
        this.post();
        break;
      case "PUT":
        this.put();
        break;
      case "DELETE":
        this.delete();
        break;
    }
  }

}
