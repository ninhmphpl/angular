import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-template-type',
  templateUrl: './template-type.component.html',
  styleUrls: ['./template-type.component.scss']
})
export class TemplateTypeComponent implements OnInit {
  constructor(public api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getTemplateType()
  }

  next(){
    this.api.templateTypePage ++; this.api.getTemplateType()
  }
  previous(){
    this.api.templateTypePage --; this.api.getTemplateType()
  }

}
