import { Injectable } from '@angular/core';
import { ProductDetail } from '../Model/Product';
import { ApiService } from './apiService';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService extends ApiService<ProductDetail>{

}
