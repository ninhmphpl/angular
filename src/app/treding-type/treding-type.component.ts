import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-treding-type',
  templateUrl: './treding-type.component.html',
  styleUrls: ['./treding-type.component.scss']
})
export class TredingTypeComponent implements OnInit {
  constructor(public api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getTrendingType()
  }

  public addIcon(indexTrendingType: number, url: string) {
    if (this.api.trendingTypes[indexTrendingType].icons == null) this.api.trendingTypes[indexTrendingType].icons = []
    this.api.trendingTypes[indexTrendingType].icons.push(url)
  }


}
