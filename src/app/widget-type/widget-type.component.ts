import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-widget-type',
  templateUrl: './widget-type.component.html',
  styleUrls: ['./widget-type.component.scss']
})
export class WidgetTypeComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getWidgetType()
  }
}
