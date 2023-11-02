import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {style} from "@angular/animations";

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit{
  constructor(public api: ApiService) {
  }
  ngOnInit(): void {
    this.api.getStyleHome()
  }

  protected readonly style = style;
}
