import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {environment} from "../../../environment/environments";
import {Source} from "../../model/Source";
import {HttpClient} from "@angular/common/http";
import {ThemeService} from "../theme.service";

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
  save(i : number){
    this.theme.saveSource(this.source[i], source1 => {
      this.source[i] = source1
    })
  }
  create(url : string){
    let source = new Source();
    source.url = url
    source.type = this.choice
    this.theme.saveSource(source, source1 => {
      this.source.unshift(source1)
    })
  }
  delete(i : number){
    this.theme.deleteSource(this.source[i], () => {
      this.source.splice(i, 1)
    })
  }

}
