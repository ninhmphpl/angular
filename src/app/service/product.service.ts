import { Injectable } from '@angular/core';
import { Product } from '../model/model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService<Product> {

}
