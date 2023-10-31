import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Icon} from "../model/Icon";

@Component({
  selector: 'app-select-icon',
  templateUrl: './select-icon.component.html',
  styleUrls: ['./select-icon.component.scss']
})
export class SelectIconComponent {
  @Output() dataEvent = new EventEmitter<Icon[]>();
  @Input() icons!: Icon[];
}
