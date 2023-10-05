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
  constructor(public painting : PaintingService) {
  }
  ngOnInit(): void {
    this.painting.get()
  }
  save(i : number){
    this.painting.saveStyle(this.painting.styles[i],style => this.painting.styles[i] = style)
  }
  create(){
    this.painting.saveStyle(new Style(),style => this.painting.styles.unshift(style))
  }
  delete(i : number){
    this.painting.deleteStyle(this.painting.styles[i], () => this.painting.styles.splice(i, 1))
  }

  saveKey(key : string){
    this.painting.saveKey(key, ()=>{
      this.getKey(this.styleSelection)
    })
  }
  deleteKey(key: string){
    this.painting.deleteKey(key, ()=>{
      this.getKey(this.styleSelection)
    })
  }
  getKey(i : number){
    this.styleSelection = i;
    this.keyChoice = []
    for(let key of this.painting.key){
      if(this.painting.styles[i].keys.indexOf(key)!= -1){
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
    this.painting.styles[this.styleSelection].keys = result
    console.log(this.painting.styles[this.styleSelection].keys)
    this.save(this.styleSelection)
  }

}
