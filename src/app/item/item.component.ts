import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit{
  constructor(public  api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getItem()
  }

}
