import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Color} from "../model/Model";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  @Output() colorResult = new EventEmitter<Color>();
  @Input() color!: Color;
  update(){
    this.colorResult.emit(this.color)
  }
}
