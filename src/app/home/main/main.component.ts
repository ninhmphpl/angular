import { Component, OnInit } from '@angular/core';
import { ProductServiceLite as ProductLiteService } from 'src/app/service/ProductLiteService';
import { ProductLite } from './Product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public products: ProductLite[] = [];
  public productShow: ProductLite[] = []

  public sorts: string[] = ['Price', 'Price: Low to High ', 'Price: High to Low'];
  // >0 ==> choice
  public sort: number = 0;
  public filters: string[] = ['Popular', 'Laster', 'Top Seller'];
  // >=0 ==> choice
  public filter: number = 0;

  constructor(
    private service: ProductLiteService
  ) { }

  ngOnInit(): void {
    this.service.findAll('/products/lites').subscribe((data: ProductLite[]) => { this.products =  [...data ]; console.log('find all: ');console.log( this.products);
     })
  }


  public setProducts(products: ProductLite[]) {
    this.productShow = products
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
