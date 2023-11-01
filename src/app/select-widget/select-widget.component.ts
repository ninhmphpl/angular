import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Widget} from "../model/Widget";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-select-widget',
  templateUrl: './select-widget.component.html',
  styleUrls: ['./select-widget.component.scss']
})
export class SelectWidgetComponent {
  @Output() dataEvent = new EventEmitter<Widget[]>();
  @Input() widgets!: Widget[];
  data : SelectWidget[] = []
  search = ''
  constructor(public api : ApiService) {
  }
  init() {
    console.log(this.widgets)
    this.api.getWidgetSimple(()=>{
      this.convert()
    })
  }
  save(){
    let result: Widget[] = []
    for(let dataWidget of this.data){
      if(dataWidget.check) result.push(dataWidget.widget)
    }
    this.dataEvent.emit(result)
  }
  convert(){
    this.data = []
    for(let widget of this.api.widgets){
      let selectWidget = new SelectWidget(false, widget)
      if(this.widgets){
        for(let widgetCurrent of this.widgets){
          if(widgetCurrent.id === widget.id){
            selectWidget.check = true
            console.log(true)
            break
          }
        }
      }
      this.data.push(selectWidget)
    }
  }
}

class SelectWidget{
  constructor(check: boolean, widget: Widget) {
    this.check = check;
    this.widget = widget;
  }

  check : boolean = false
  widget! : Widget
}
