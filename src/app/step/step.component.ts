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
  indexSelect: number = 0;
  widthSelect: number = 4;
  heightSelect: number = 4;
  ngOnInit(): void {
    this.api.getStep()
    this.api.getTrendingType()
  }


  public addIcon(indexTrendingType: number, url: string) {
    if (this.api.trendingTypes[indexTrendingType].icons == null) this.api.trendingTypes[indexTrendingType].icons = []
    this.api.trendingTypes[indexTrendingType].icons.push(url)
  }


  public makeStep(index: number, modalMakeStep: any, modalEditModal: any) {
    if (this.api.trendingTypes[index].step == null) {
      modalMakeStep.click();
      this.indexSelect = index
    } else {
      modalEditModal.click();
    }
  }

  public makeStepSubmit() {
    this.api.makeStep(this.indexSelect, this.widthSelect, this.heightSelect)
  }

  public updateStepSubmit() {
    this.api.makeStep(this.indexSelect, this.api.trendingTypes[this.indexSelect].step.width, this.api.trendingTypes[this.indexSelect].step.height)
  }
  public editStep(i: number) {
    let point = this.api.trendingTypes[this.indexSelect].step.points[i]
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
