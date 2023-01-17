import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  ngOnInit(): void {
    this.date.setUTCDate(1)
  }
  private date : Date = new Date("2222-12-1");
  public product: Product = {
    name:"ninh",
    age: 19,
    gender: true,
    birth: this.date
  }
}
