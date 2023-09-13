import {Component, Input, OnInit} from '@angular/core';
import {PaintingService} from "../../painting.service";
import {Painting} from "../../model/painting";
import {get, set, StyleChoice} from "../../model/StyleChoice";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent{
  @Input() pain : Painting[] = []
  @Input() type : string = ""
  constructor(public painting : PaintingService) {
  }
  paintingIndexSelection : number = 0
  styleChoices : StyleChoice[] = []

  create(){
    let pain = new Painting()
    pain.type = this.type
    this.painting.savePain(pain, pain1 => this.pain.unshift(pain1))
  }
  save(i : number){
    this.painting.savePain(this.pain[i], pain => this.pain[i] = pain)
  }
  delete(i : number){
    this.painting.deletePain(this.pain[i].id, () => this.pain.splice(i, 1))
  }
  selectionStyle(i : number){
    this.paintingIndexSelection = i;
    this.styleChoices = get(this.painting.styles, this.pain[i].styles)
  }
  commitStyle(){
    this.pain[this.paintingIndexSelection].styles = set(this.styleChoices)
    this.save(this.paintingIndexSelection)
  }



}
