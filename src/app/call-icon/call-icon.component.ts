import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CallIcon} from "../../model/CallIcon";
import {ThemeService} from "../theme.service";
import {Type} from "../../model/Type";
@Component({
  selector: 'app-call-icon',
  templateUrl: './call-icon.component.html',
  styleUrls: ['./call-icon.component.scss']
})
export class CallIconComponent implements OnInit{
  @Output() eventData = new EventEmitter<CallIcon>();
  constructor(public themeService : ThemeService) {
  }
  ngOnInit(): void {
  }
  create(){
    this.themeService.saveCallIcon(new CallIcon(), callIcon => this.themeService.callIcons.unshift(callIcon))
  }
  save(i : number){
    this.themeService.saveCallIcon(this.themeService.callIcons[i], callIcon => this.themeService.callIcons[i] = callIcon)
  }
  createType(name : string){
    this.themeService.saveType(new Type(name), type => this.themeService.types.unshift(type))
  }
  delete(i : number){
      this.themeService.deleteCallIcon(this.themeService.callIcons[i], () => this.themeService.callIcons.splice(i, 1))
  }
  select(i : number){
    this.eventData.emit(this.themeService.callIcons[i])
  }
}
