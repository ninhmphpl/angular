import { Component, ErrorHandler } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  files : File[] = [];
  validFile = true;
  public productForm = this.fb.group({
    name : ['',[Validators.required, Validators.maxLength(225)]],
    price : [0, [Validators.min(1)]],
    description : ['', [Validators.maxLength(3000)]],
    category : this.fb.group({
      id : 0
    })
  })

  constructor(private fb: FormBuilder) { }

  public submit(){

  }

  getFile(even : any){
    this.files = even.target.files
    this.validFile = (this.files.length > 4 || this.files.length == 0)
  }


}
