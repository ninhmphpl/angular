import { HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HttpOptions } from '../Model/Api';
import { ProductDetail } from '../Model/Product';
import {ProductDetailService} from "../service/product-detail.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public product!: ProductDetail;
  public ratings!: string;
  public sold!: string;
  public saleOff!: number;


  public saleOffChoice = -1;
  public numberProductChoice: number = 0;
  public colorChoices: number = -1;

  public url!: string;
  public httpOptions : HttpOptions;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ProductDetailService
  ) {
    this.url = 'http://localhost:8080/products/detail/'
    this.httpOptions = {
      headers : new HttpHeaders({})
    }
   }

  ngOnInit() {
    this.getProductDetail()
  }

  public getProductDetail() {
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap)=> this.service.getOne(`${this.url}${params.get('id')}`, this.httpOptions)
      )
    ).subscribe((data: ProductDetail) => {
      this.product = { ...data }
      this.ratings = this.renderString(this.product.available);
      this.sold = this.renderString(this.product.sold);
      this.saleOff = this.renderSaleOff();
    })
  }


  public renderSaleOff() {
    let a = this.product?.newPrice
    let b = this.product?.oldPrice
    return (100 - (a / b) * 100)
  }

  public plus() {
    this.numberProductChoice++;
    if (this.numberProductChoice > this.product.available) {
      this.numberProductChoice = this.product.available
    }
  }
  public minus() {
    this.numberProductChoice--;
    if (this.numberProductChoice < 0) {
      this.numberProductChoice = 0;
    }
  }


  public choiceSaleOff(value: number) {
    this.saleOffChoice = value
  }
  public colorChoice(id: number) {
    this.colorChoices = id;
  }


  public renderString(property: number): string {
    if (property >= 1000) {
      return Math.floor(property / 1000) + "k";
    } else if (property >= 10 ** 6) {
      return Math.floor(property / (10 ** 6)) + "M";
    } else if (property >= 10 ** 9) {
      return Math.floor(property / (10 ** 9)) + "B";
    }
    return property + ''
  }

}
