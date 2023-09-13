import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Style} from "../../model/style";
import {PaintingService} from "../../painting.service";

@Component({
  selector: 'app-style-choice',
  templateUrl: './style-choice.component.html',
  styleUrls: ['./style-choice.component.scss']
})
export class StyleChoiceComponent {
  @Output() dataEvent = new EventEmitter<Style[]>();
  @Input() currentStyle : Style[] = []
  styleChoice : StyleChoice[] = []
  styles : Style[] = [];
  constructor(public pain : PaintingService) {
  }
  get(): void {
    this.styles = this.pain.styles
    this.styleChoice = []
    for(let i = 0 ; i < this.styles.length ; i ++){
      this.styleChoice.push(new StyleChoice(false, this.styles[i]))
      for(let j = 0 ; j < this.currentStyle.length; j ++){
        if(this.currentStyle[j].id === this.styles[i].id){
          this.styleChoice[i].choice = true;
          break
        }
      }
    }
  }
  set(){
    let a : Style[] = []
    this.styleChoice.forEach(value => {
      if(value.choice) a.push(value.style)
    })
    this.dataEvent.emit(a)
    this.styleChoice = []
  }


}
class StyleChoice{
  constructor(choice: boolean, style: Style) {
    this.choice = choice;
    this.style = style;
  }

  choice : boolean
  style : Style

}
