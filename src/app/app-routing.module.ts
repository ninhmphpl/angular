import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from "./category/category.component";
import {StickerComponent} from "./sticker/sticker.component";
import {StyleComponent} from "./style/style.component";
import {GifComponent} from "./gif/gif.component";


const routes: Routes = [
  {path:"category",component:CategoryComponent},
  {path:"sticker",component:StickerComponent},
  {path:"style",component:StyleComponent},
  {path:"gif",component:GifComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
