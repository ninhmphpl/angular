import {Component, OnInit} from '@angular/core';
import {PaintingService} from "../painting.service";

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit{
  constructor(public painting : PaintingService) {
  }
  ngOnInit(): void {
    this.painting.get()
  }

}
