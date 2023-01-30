import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductLite } from '../Product';

@Component({
  selector: 'app-controller-page',
  templateUrl: './controller-page.component.html',
  styleUrls: ['./controller-page.component.scss']
})
export class ControllerPageComponent implements OnInit {

  @Input() productsIn: ProductLite[] = []
  @Output() productsOut =  new EventEmitter<ProductLite[]>;

    //Start page
  public onProduct: ProductLite[][] = []
  public numberPages: number = 0;
  public pageNow: number = 0;
  public pageFooter: number[] = []

  ngOnInit(): void {
    this.shapeProduct(this.productsIn)
    this.renderFootPage()
  }
  public shapeProduct(products: ProductLite[]) {
    let NUMBER_PRODUCT_DEFAUT = 8;
    let page = 0;
    let nowRender;
    while ((nowRender = page * NUMBER_PRODUCT_DEFAUT) < products.length) {
      let arr = [];
      for (let i = nowRender; i < (nowRender + NUMBER_PRODUCT_DEFAUT); i++) {
        arr.push(products[i])
      }
      this.onProduct.push(arr)
      page++
    }
    if (this.onProduct.length > 0) {
      this.productsOut.emit(this.onProduct[0])
    }
    this.numberPages = this.onProduct.length
  }

  public nextPage() {
    this.productsOut.emit(this.onProduct[++this.pageNow])
    this.renderFootPage()
  }
  public preePage() {
    this.productsOut.emit(this.onProduct[--this.pageNow])
    this.renderFootPage()
  }
  public setPageNow(i: number) {
    this.pageNow = i;
    this.productsOut.emit(this.onProduct[this.pageNow])
    this.renderFootPage()
  }
  public renderFootPage() {
    this.pageFooter = [];
    if (this.pageNow - 2 > 1) {
      for (let i = this.pageNow - 2; ((i <= this.pageNow + 2) && (i < this.onProduct.length)); i++) {
        this.pageFooter.push(i);
      }
    } else {
      for (let i = 0; ((i < this.onProduct.length) && (i < 5)); i++) {
        this.pageFooter.push(i);
      }
    }
  }

  //End page

}
