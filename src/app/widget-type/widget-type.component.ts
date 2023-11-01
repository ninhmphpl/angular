import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {WidgetType} from "../model/WidgetType";

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
  getObjectKeys(obj: any) {
    return Object.keys(obj).map(key => ({ key, value: obj[key] }));
  }
}
