import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThemeComponent} from "./theme/theme.component";
import {CallIconComponent} from "./call-icon/call-icon.component";
import {StickerComponent} from "./sticker/sticker.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {path:"theme",component:ThemeComponent},
  {path:"call-icon",component:CallIconComponent},
  {path:"sticker",component:StickerComponent},
  {path:"category",component:CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
