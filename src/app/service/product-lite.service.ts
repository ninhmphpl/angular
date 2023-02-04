import { Injectable } from '@angular/core';
import { ProductLite } from 'src/environments/Product';
import { ApiService } from './apiService';

@Injectable({
  providedIn: 'root'
})
export class ProductLiteService extends ApiService<ProductLite>{

}
