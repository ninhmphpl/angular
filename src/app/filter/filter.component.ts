import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor(public api: ApiService) {
  }

  ngOnInit(): void {
    this.api.filterGet()
  }

  addImageSuggest(i: number, url: string) {
    if (this.api.filters[i].suggestImage == null) {
      this.api.filters[i].suggestImage = []
    }
    this.api.filters[i].suggestImage.push(url)
  }

}
