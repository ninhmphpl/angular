import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from "./category/category.component";
import {StickerComponent} from "./sticker/sticker.component";


const routes: Routes = [
  {path:"category",component:CategoryComponent},
  {path:"sticker",component:StickerComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
