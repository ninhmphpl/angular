import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PaintingComponent} from "./painting/painting.component";
import {StyleComponent} from "./style/style.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {path:"painting",component:PaintingComponent},
  {path:"style",component:StyleComponent},
  {path:"category",component:CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
