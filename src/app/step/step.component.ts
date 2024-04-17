import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  iStep: number = -1;
  ngOnInit(): void {
    this.api.getStep()
    this.api.getTrendingType()
  }

  public editStep(iStep :number , modalEdit : any){
    this.iStep = iStep
    modalEdit.click();
  }

  public editPoint(iPoint : number) {
    let point = this.api.steps[this.iStep].points[iPoint]
    if (point.state == 'none') {
      point.state = 'stone'
    } else if (point.state == 'stone') {
      point.state = 'hollow'
    } else if (point.state == 'hollow') {
      point.state = 'start'
    } else if (point.state == 'start') {
      point.state = 'exit'
    } else {
      point.state = 'none'
    }
  }

}
