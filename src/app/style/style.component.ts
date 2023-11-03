import {Component, OnInit} from '@angular/core';
import {PaintingService} from "../painting.service";
import {Style} from "../model/style";

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit{
  search = ''
  searchKey = ''
  styleSelection : number = 0;
  keyChoice : {choice : boolean, key : string}[] = []
  constructor(public api : PaintingService) {
  }
  ngOnInit(): void {
    this.api.get()
    this.api.getCategory()
  }
  save(i : number){
    this.api.saveStyle(this.api.styles[i], style => this.api.styles[i] = style)
  }
  create(){
    this.api.saveStyle(new Style(), style => this.api.styles.unshift(style))
  }
  delete(i : number){
    this.api.deleteStyle(this.api.styles[i], () => this.api.styles.splice(i, 1))
  }

  saveKey(key : string){
    this.api.saveKey(key, ()=>{
      this.getKey(this.styleSelection)
    })
  }
  deleteKey(key: string){
    this.api.deleteKey(key, ()=>{
      this.getKey(this.styleSelection)
    })
  }
  getKey(i : number){
    this.styleSelection = i;
    this.keyChoice = []
    for(let key of this.api.key){
      if(this.api.styles[i].keys.indexOf(key)!= -1){
        this.keyChoice.push({choice : true, key : key})
      }else {
        this.keyChoice.push({choice : false, key : key})
      }
    }
    console.log(this.keyChoice)
  }
  setKey(){
    let result : string[] = []
    this.keyChoice.forEach(value =>{if (value.choice) result.push(value.key)} )
    this.api.styles[this.styleSelection].keys = result
    console.log(this.api.styles[this.styleSelection].keys)
    this.save(this.styleSelection)
  }

  protected readonly screenY = screenY;
}
