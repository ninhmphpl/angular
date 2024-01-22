import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getTemplate()
    this.api.getAlphabet()
    this.api.getSound()
    this.api.getTemplateType()
  }

  next(){
    this.api.templatePage ++; this.api.getTemplate()
  }
  previous(){
    this.api.templatePage --; this.api.getTemplate()
  }

}
