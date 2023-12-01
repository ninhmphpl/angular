import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrendingComponent} from "./trending/trending.component";
import {TredingTypeComponent} from "./treding-type/treding-type.component";
import {MusicComponent} from "./music/music.component";
import {FormIconComponent} from "./form-icon/form-icon.component";
import {QuestionComponent} from "./question/question.component";

const routes: Routes = [
  {path:"trending",component:TrendingComponent},
  {path:"trendingType",component:TredingTypeComponent},
  {path:"music",component:MusicComponent},
  {path:"formIcon",component:FormIconComponent},
  {path:"question",component:QuestionComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
