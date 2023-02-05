import { Component, ErrorHandler } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FileUploadFireBase, upFileArray } from 'src/environments/update-file-firebase';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ProductDetailService } from 'src/app/service/product-detail.service';
import { environment, httpOptions } from 'src/environments/environment';
import { ProductDetail } from 'src/environments/Product';
const url = environment.url
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  files: FileUploadFireBase[] = [];
  validFile = true;
  public productForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(225)]],
    price: [0, [Validators.min(1)]],
    description: ['', [Validators.maxLength(3000)]],
    category: this.fb.group({
      id: 0
    })
  })

  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private serviceProductDetail: ProductDetailService
  ) { }

  public submit() {
    if (this.productForm.valid || this.validFile) {
      upFileArray(this.files, () => {
        let fileURL: string[] = []
        for (let fileUrl of this.files) {
          fileURL.push(fileUrl.url)
        }
        let productDetail: any = this.productForm.value
        productDetail.imgs = fileURL;
        console.log(productDetail);
        this.serviceProductDetail.post(`${url}/products/detail`, productDetail, httpOptions).subscribe()
      })

    }
  }

  getFile(even: any) {
    let files: File[] = even.target.files
    this.files = []
    for (let file of files) {
      this.files.push(new FileUploadFireBase(file, this.storage).checkTypes(['image/gif', 'image/jpeg', 'image/png']))
    }
    this.validFile = (this.files.length > 4 || this.files.length == 0)
  }

  // >> drag drop
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.files, event.previousIndex, event.currentIndex);
  }
  // drag drop


}
