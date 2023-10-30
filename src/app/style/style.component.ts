import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit{
  ngOnInit(): void {
    this.api.getStyle(this.api.stylePage)
    this.api.getBanner(this.api.stylePage)
  }
  constructor(public api : ApiService) {
  }
  next(){
    this.api.getStyle(this.api.stylePage++)
  }
  previous(){
    this.api.getStyle(this.api.stylePage++)
  }

}
