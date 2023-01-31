import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductDetailService } from '../service/product-detail.service';
import { product_detail } from './Detail';

@Component({
  selector: 'app-detalt',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public product = product_detail;
  public ratings = this.renderString(this.product.ratings);
  public sold = this.renderString(this.product.sold);
  public saleOff = (100 - (this.product.newPrice/this.product.oldPrice * 100))

  public saleOffChoice = -1;
  public numberProductChoice : number = 0;
  public colorChoices : number = -1;

  constructor(
    private router:Router, 
    private activatedRoute: ActivatedRoute,
    private service: ProductDetailService
  ){}


  ngOnInit() {
    // this.product = this.service.getProductDetail(
    //   switchMap((params: ParamMap) =>
    //     this.service.getProductDetail(params.get('id')!))
    // );
  }



  public plus(){
    this.numberProductChoice++;
    if(this.numberProductChoice > this.product.available){
      this.numberProductChoice = this.product.available
    }
  }
  public minus(){
    this.numberProductChoice--;
    if (this.numberProductChoice < 0 ) {
      this.numberProductChoice = 0;
    }
  }


  public choiceSaleOff(value: number){
    this.saleOffChoice = value
  }
  public colorChoice(id : number){
    this.colorChoices = id;
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
