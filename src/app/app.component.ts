import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environtment } from 'src/environments/environment';
import { Product, Category } from './model/model';
import { ProductService } from './service/product.service';
const url = environtment.url


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  category : Category[] = [new Category(1,'2'), new Category(2,'3')]
  productList!: Product[]
  productForm = this.fb.group<Product>(new Product())
  

  constructor(
    private service: ProductService,
    private fb: FormBuilder
  ) {
    this.setValid()
    this.getList()
  }

  setValid(){
    this.productForm.setValidators([Validators.required])
    this.productForm.controls.name.setValidators([Validators.maxLength(8)])
    this.productForm.controls.price.setValidators([Validators.min(0)])
  }

  getList() {
    this.service.getArray(`${url}/products` ).subscribe(data => this.productList = data)
  }

  getProdcutById(event: any) {
    let id = event.target.value
    this.service.getOne(url + '/' + id).subscribe((data: Product) => {
      this.productForm.setValue(data)
    })
  }
  postProduct() {
    
  }

  submit(){}
}
