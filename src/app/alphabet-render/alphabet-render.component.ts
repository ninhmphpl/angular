import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-alphabet-render',
  templateUrl: './alphabet-render.component.html',
  styleUrls: ['./alphabet-render.component.scss']
})
export class AlphabetRenderComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getAlphabet()
  }
  next(){
    this.api.alphabetPage ++; this.api.getAlphabet()
  }
  previous(){
    this.api.alphabetPage --; this.api.getAlphabet()
  }

}
