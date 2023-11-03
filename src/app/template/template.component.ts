import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  constructor(public api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getTemplate()
    this.api.getCategory("template")
  }
}
