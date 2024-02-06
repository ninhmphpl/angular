import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {min} from "rxjs";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.modelGet()
    this.api.filterGet()
    this.api.typeGet()
    this.api.sessionGet()
  }

  next(){
    this.api.offset += this.api.limit
    this.api.modelGet()
  }
  previous(){
    this.api.offset = Math.max(this.api.offset - this.api.limit, 0)
    this.api.modelGet()
  }

}
