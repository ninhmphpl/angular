import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {style} from "@angular/animations";

@Component({
  selector: 'app-style',
  templateUrl: './ai-poster.component.html',
  styleUrls: ['./ai-poster.component.scss']
})
export class AiPosterComponent implements OnInit{
  constructor(public api: ApiService) {
  }
  ngOnInit(): void {
    this.api.getAiPosterHome()
  }

  protected readonly style = style;
}
