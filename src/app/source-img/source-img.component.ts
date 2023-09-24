import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {environment} from "../../../environment/environments";
import {Source} from "../../model/Source";
import {HttpClient} from "@angular/common/http";
import {ThemeService} from "../theme.service";
const url = environment.url
@Component({
  selector: 'app-source-img',
  templateUrl: './source-img.component.html',
  styleUrls: ['./source-img.component.scss']
})
export class SourceImgComponent{
  @Output() dataEvent = new EventEmitter<string>();
  @Input() source : Source[] = []
  choice : string = ""
  constructor(public theme : ThemeService) {
  }
  choiceImg(img : string){
    this.dataEvent.emit(img)
    this.source = []
  }

}
