import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from './first-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  public count: number = 0
  public newcount = ''
  
  // DI service for component
  constructor(public abc : FirstServiceService){
  }
  ngOnInit(): void {
    console.log("hello");
    this.newcount = this.abc.getHero(this.count)
    this.count++
  }

}
