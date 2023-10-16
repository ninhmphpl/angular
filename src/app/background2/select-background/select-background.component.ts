import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Source} from "../../../model/Source";
import {ThemeService} from "../../theme.service";

@Component({
  selector: 'app-select-background',
  templateUrl: './select-background.component.html',
  styleUrls: ['./select-background.component.scss']
})
export class SelectBackgroundComponent implements OnInit{
  @Input() source! : Source;
  @Output() dataEvent = new EventEmitter<Source>();
  show : boolean = false
  constructor(public theme : ThemeService) {
  }
  ngOnInit(): void {
    this.theme.getSourceAvatar()
  }

  select(i : number){
    this.dataEvent.emit(this.theme.sourceBackground[i])
  }

}
