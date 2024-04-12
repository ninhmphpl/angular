import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrendingComponent} from "./trending/trending.component";
import {TredingTypeComponent} from "./treding-type/treding-type.component";
import {MusicComponent} from "./music/music.component";
import {StyleComponent} from "./style/style.component";
import {StickerComponent} from "./sticker/sticker.component";
import {PopupTrendingComponent} from "./popup-trending/popup-trending.component";
import {ItemComponent} from "./item/item.component";

const routes: Routes = [
  {path:"trending",component:TrendingComponent},
  {path:"trendingType",component:TredingTypeComponent},
  {path:"music",component:MusicComponent},
  {path:"style",component:StyleComponent},
  {path:"sticker",component:StickerComponent},
  {path:"popup",component:PopupTrendingComponent},
  {path:"shop-item",component:ItemComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
