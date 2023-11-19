import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrendingComponent} from "./trending/trending.component";
import {TredingTypeComponent} from "./treding-type/treding-type.component";
import {MusicComponent} from "./music/music.component";
import {Style} from "./model/Model";
import {StyleComponent} from "./style/style.component";

const routes: Routes = [
  {path:"trending",component:TrendingComponent},
  {path:"trendingType",component:TredingTypeComponent},
  {path:"music",component:MusicComponent},
  {path:"style",component:StyleComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
