import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit{
  select = 'top'
  background : string[] = []
  constructor(public theme : ThemeService) {
  }
  ngOnInit(): void {
    this.theme.getCategory()
  }
  get(){
    console.log("abc")
    this.theme.getBackground(this.select, background1 => {
      this.background = background1
    })
  }



}
