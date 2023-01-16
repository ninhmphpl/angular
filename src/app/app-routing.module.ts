import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { HelloComponent } from './hello/hello.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {path: "", component: HelloComponent},
  {path: "shop", component: ShopComponent},
  {path: "**", component: PageNotFoundComponent},
  {path: "directives", component: DirectivesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
