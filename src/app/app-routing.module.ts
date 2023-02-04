import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './produt/edit-product/edit-product.component';
import { ProdutComponent } from './produt/produt.component';

const routes: Routes = [
  {
    path: 'product', children: [
      { path: '' , component: ProdutComponent },
      { path: 'edit/:id', component: EditProductComponent }
    ]
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
