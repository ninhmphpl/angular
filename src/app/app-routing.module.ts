import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateComponent} from "./template/template.component";
import {ItemComponent} from "./item/item.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {path:"template",component:TemplateComponent},
  {path:"category",component:CategoryComponent},
  {path:"item",component:ItemComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
