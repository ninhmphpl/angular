import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-treding-type',
  templateUrl: './treding-type.component.html',
  styleUrls: ['./treding-type.component.scss']
})
export class TredingTypeComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getTrendingType()
  }

}
