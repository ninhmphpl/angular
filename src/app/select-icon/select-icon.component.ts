import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icon} from "../model/Icon";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-select-icon',
  templateUrl: './select-icon.component.html',
  styleUrls: ['./select-icon.component.scss']
})
export class SelectIconComponent {
  @Output() dataEvent = new EventEmitter<Icon[]>();
  @Input() icons!: Icon[];
  data : SelectIcon[] = []
  constructor(public api : ApiService) {
  }
  init() {
    console.log(this.icons)
    this.api.getIcon(()=>{
      this.convert()
    })
  }
  save(){
    let result: Icon[] = []
    for(let dataIcon of this.data){
      if(dataIcon.check) result.push(dataIcon.icon)
    }
    this.dataEvent.emit(result)
  }

  convert(){
    this.data = []
    for(let icon of this.api.icons){
      let selectIcon = new SelectIcon(false, icon)
      if(this.icons){
        for(let iconCurrent of this.icons){
          if(iconCurrent.id === icon.id){
            selectIcon.check = true
            console.log(true)
            break
          }
        }
      }
      this.data.push(selectIcon)
    }
  }
}
class SelectIcon{
  constructor(check: boolean, icon: Icon) {
    this.check = check;
    this.icon = icon;
  }

  check : boolean = false
  icon! : Icon
}
