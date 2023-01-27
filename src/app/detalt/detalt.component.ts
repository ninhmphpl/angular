import { Component, OnInit } from '@angular/core';
import { product_detalt } from './Detalt';

@Component({
  selector: 'app-detalt',
  templateUrl: './detalt.component.html',
  styleUrls: ['./detalt.component.scss']
})
export class DetaltComponent implements OnInit {

  public product = product_detalt;
  public img = this.product.img[0];
  public ratings = this.renderString(this.product.ratings);
  public sold = this.renderString(this.product.sold);
  public saleOff = (100 - (this.product.newPrice/this.product.oldPrice * 100))

  public selectOffChoice = -1;
  public number = 0;

  public changeIMG(img: string) {
    this.img = img
  }

  public plus(){
    this.number++;
    if(this.number > this.product.available){
      this.number = this.product.available
    }
  }
  public minus(){
    this.number--;
    if (this.number < 0 ) {
      this.number = 0;
    }
  }

  ngOnInit(): void {
  }

  public choiceSaleOff(value: number){
    this.selectOffChoice = value
  }

  public renderString(property: number): string {
    console.log(property);
    
    if (property >= 1000) {
      return Math.floor(property/1000) + "k";
    } else if (property >= 10 ** 6) {
      return Math.floor(property / (10 ** 6)) + "M";
    } else if (property >= 10 ** 9) {
      return Math.floor(property / (10 ** 9)) + "B";
    }
    return property + ''
  }
}
