import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThemeComponent} from "./theme/theme.component";
import {CategoryComponent} from "./category/category.component";
import {StyleComponent} from "./style/style.component";
import {TemplateComponent} from "./template/template.component";

const routes: Routes = [
  {path:"theme",component:ThemeComponent},
  {path:"category",component:CategoryComponent},
  {path:"style",component:StyleComponent},
  {path:"template",component:TemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
