import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDetail } from '../home/main/Product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(
    private api : ApiService,
  ) { }

  public getProductDetail(id : number) : ProductDetail{
    let plusURL = '/' + id
    let productDetail : ProductDetail;
    this.api.findBy(plusURL,{}).subscribe((data: ProductDetail) => {
      productDetail = { ...data }
    })
    return productDetail;
  }

}
