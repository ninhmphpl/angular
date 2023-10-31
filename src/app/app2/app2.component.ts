import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getApp()
  }
}
