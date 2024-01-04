import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from "./category/category.component";
import {StickerComponent} from "./sticker/sticker.component";
import {StyleComponent} from "./style/style.component";


const routes: Routes = [
  {path:"category",component:CategoryComponent},
  {path:"sticker",component:StickerComponent},
  {path:"style",component:StyleComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
