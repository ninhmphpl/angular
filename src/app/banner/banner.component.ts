import {Component, OnInit} from '@angular/core';
import {PaintingService} from "../painting.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{
  constructor(public painting : PaintingService) {
  }
  ngOnInit(): void {
    this.painting.get()
  }

}
