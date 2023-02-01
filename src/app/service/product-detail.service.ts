import { Injectable } from '@angular/core';
import { ProductDetail } from '../Model/Product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService extends ApiService<ProductDetail>{

}
