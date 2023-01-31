import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from '../home/main/Product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(
    private api : ApiService<ProductDetail>,
  ) { }

  public getProductDetail(id : string | null) : Observable<ProductDetail>{
    let plusURL = '/' + id
    return this.api.findBy(plusURL)
  }

}
