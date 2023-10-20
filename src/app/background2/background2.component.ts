import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../theme.service";
import {Background2} from "../../model/Background2";

@Component({
  selector: 'app-background2',
  templateUrl: './background2.component.html',
  styleUrls: ['./background2.component.scss']
})
export class Background2Component implements OnInit{
  background2 : Background2[] = []
  category : string = 'all'
  page : number = 0;
  constructor(public theme : ThemeService) {
  }

  ngOnInit(): void {
    this.get()
  }
  get(){
    this.theme.getBackground2(this.page,this.category, background => this.background2 = background)
  }
  next(){
    if(this.background2.length !== this.theme.limitDefault) return
    this.page ++
    this.get()
  }
  previous(){
    if(this.page == 0) return
    this.page --
    this.get()
  }
  add(){
    let background2 = new Background2();
    this.theme.saveBackground2(background2, background => {
      this.background2.unshift(background)
    })
  }

  save(i : number){
    this.theme.saveBackground2(this.background2[i], background => {
      this.get()
    })
  }

  delete(i : number){
    if(confirm("Delete ?")){
      this.theme.deleteBackground2(this.background2[i], () => {
        this.get()
      })
    }
  }
}
