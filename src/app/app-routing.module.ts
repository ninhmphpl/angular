import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from "./category/category.component";
import {WallPaperComponent} from "./wall-paper/wall-paper.component";
import {AnimationComponent} from "./animation/animation.component";

const routes: Routes = [
  {path:"category",component:CategoryComponent},
  {path:"wallpaper",component:WallPaperComponent},
  {path:"animation",component:AnimationComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
