import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WallPaperComponent} from "./wall-paper/wall-paper.component";
import {CategoryComponent} from "./category/category.component";
import {ThemeComponent} from "./theme/theme.component";
import {Icon} from "./model/Icon";
import {App2Component} from "./app2/app2.component";
import {IconComponent} from "./icon/icon.component";
import {WidgetComponent} from "./widget/widget.component";
import {WidgetTypeComponent} from "./widget-type/widget-type.component";
import {TemplateComponent} from "./template/template.component";
import {StyleComponent} from "./style/style.component";

// <a routerLink="/wall-paper">Wall Paper</a>
// <a routerLink="/category">Category</a>
//   <a routerLink="/theme">Theme</a>
//   <a routerLink="/icon">Icon</a>
//   <a routerLink="/app">App</a>
const routes: Routes = [
  {path:"wall-paper",component:WallPaperComponent},
  {path:"category",component:CategoryComponent},
  {path:"theme",component:ThemeComponent},
  {path:"icon",component:IconComponent},
  {path:"app",component:App2Component},
  {path:"widget",component:WidgetComponent},
  {path:"widget-type",component:WidgetTypeComponent},
  {path:"template",component:TemplateComponent},
  {path:"style",component:StyleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
