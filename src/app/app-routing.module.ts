import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductManagerComponent } from './product/product-manager/product-manager.component';
import { SellerCenterComponent } from './seller-center/seller-center.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path: "detail/:id", component: DetailComponent},
  {path: "seller-center", component: SellerCenterComponent},
  {path: "product", children : [
    {path : "product-manager" , component : ProductManagerComponent}
  ]},
  {path: "", component: HomeComponent},
  {path: "*", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
