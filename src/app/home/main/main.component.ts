import { Component, OnInit } from '@angular/core';
import { PRODUCT, ProductLite } from './Product';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  public products : ProductLite[] = []
  ngOnInit(): void {
    this.products = PRODUCT
  }
  constructor(
    productService : ProductServiceService
  ){}

}
