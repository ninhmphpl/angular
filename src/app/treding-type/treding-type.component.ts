import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-treding-type',
  templateUrl: './treding-type.component.html',
  styleUrls: ['./treding-type.component.scss']
})
export class TredingTypeComponent implements OnInit{
  constructor(public api : ApiService) {
  }

  idSelect : string = "";
  widthSelect : number = 4;
  heightSelect : number = 4;

  ngOnInit(): void {
    this.api.getTrendingType()
  }
  public addIcon(indexTrendingType : number, url : string){
    if(this.api.trendingTypes[indexTrendingType].icons == null)this.api.trendingTypes[indexTrendingType].icons = []
    this.api.trendingTypes[indexTrendingType].icons.push(url)
  }


  public makeStep(index : number, modalMakeStep : any, modalEditModal : any){
    if(this.api.trendingTypes[index].step == null){
      modalMakeStep.click();
      this.api.makeStep(this.idSelect, this.widthSelect, this.heightSelect)
    }else {
      modalEditModal.click();
    }
  }


  protected readonly indexedDB = indexedDB;
}
