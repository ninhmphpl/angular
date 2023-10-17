import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemeService} from "../../theme.service";
import {Source} from "../../../model/Source";
import {CallIcon} from "../../../model/CallIcon";

@Component({
  selector: 'app-select-call-icon',
  templateUrl: './select-call-icon.component.html',
  styleUrls: ['./select-call-icon.component.scss']
})
export class SelectCallIconComponent implements OnInit{
  @Input() callIcon! : CallIcon;
  @Output() dataEvent = new EventEmitter<CallIcon>();
  show : boolean = false
  constructor(public theme : ThemeService) {
  }
  ngOnInit(): void {
    this.theme.getCallIconList()
  }

  select(i : number){
    this.dataEvent.emit(this.theme.callIcons[i])
  }




}
