import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemeService} from "../../theme.service";
import {Source} from "../../../model/Source";

@Component({
  selector: 'app-select-source',
  templateUrl: './select-source.component.html',
  styleUrls: ['./select-source.component.scss']
})
export class SelectSourceComponent implements OnInit{
  @Output() dataEvent = new EventEmitter<Source>();
  source : Source[] = []
  constructor(public themeService : ThemeService) {
  }

  choiceSource(choice : string ){
    switch (choice){
      case "background" :
        this.source = this.themeService.sourceBackground
        break
      case "avatar" :
        this.source = this.themeService.sourceAvatar
        break
    }
  }
  ngOnInit(): void {
    this.themeService.getSourceBackGround()
    this.choiceSource("background")
  }
  select(i : number){
    this.dataEvent.emit(this.source[i])
  }


}
