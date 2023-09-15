import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Output() dataEvent = new EventEmitter<any>();
  @Input() name : string = "NONE"
  @Input() listOption : any[] = []
  @Input() property : string = ''
  @Input() main : any

}
