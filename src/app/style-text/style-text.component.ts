import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Image} from "../model/Model";

@Component({
  selector: 'app-style-text',
  templateUrl: './style-text.component.html',
  styleUrls: ['./style-text.component.scss']
})
export class StyleTextComponent {
  @Output() dataEvent = new EventEmitter<string[]>();
  @Input() text!: string[];

  add(newText : string) {
    if (this.text == null) this.text = []
    this.text.unshift(newText)
    this.dataEvent.emit(this.text)
  }
  update(){
    this.dataEvent.emit(this.text)
  }

  delete(i: number) {
    this.text.splice(i, 1)
    this.dataEvent.emit(this.text)
  }

}
