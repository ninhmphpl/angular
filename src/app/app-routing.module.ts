import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BannerComponent} from "./banner/banner.component";
import {StyleComponent} from "./style/style.component";
import {VideoComponent} from "./video/video.component";
import {VideoStyleComponent} from "./video/video-type/video-style.component";
import {IntroComponent} from "./intro/intro.component";

const routes: Routes = [
  {path:"banner",component:BannerComponent},
  {path:"style",component:StyleComponent},
  {path:"video",component:VideoComponent},
  {path:"video-style",component:VideoStyleComponent},
  {path:"intro",component:IntroComponent},
  {path:"",component:BannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
