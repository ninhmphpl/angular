import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { PRODUCT, ProductLite } from './Product';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public products: ProductLite[] = []
  public sorts: string[] = ['Price', 'Price: Low to High ', 'Price: High to Low'];
  // >0 ==> choice
  public sort: number = 0;
  public filters: string[] = ['Popular', 'Laster', 'Top Seller'];
  // >=0 ==> choice
  public filter: number = 0;

  ngOnInit(): void {
    this.products = PRODUCT
  }
  constructor(
    productService: ProductServiceService
  ) { }

  public setProducts(products : ProductLite[]){
    this.products = products
  }

  public setSort(i: number) {
    this.sort = i;
    this.filter = -1;
  }
  public setFilter(i: number) {
    this.filter = i;
    this.sort = 0;
  }



}
