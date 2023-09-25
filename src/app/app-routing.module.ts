import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThemeComponent} from "./theme/theme.component";
import {CallIconComponent} from "./call-icon/call-icon.component";
import {CategoryComponent} from "./category/category.component";
import {SourceImgComponent} from "./source-img/source-img.component";

const routes: Routes = [
  {path:"theme",component:ThemeComponent},
  {path:"call-icon",component:CallIconComponent},
  {path:"source",component:SourceImgComponent},
  {path:"category",component:CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
