import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./video/video.component";
import {MusicComponent} from "./music/music.component";

const routes: Routes = [
  {path:"video",component:VideoComponent},
  {path:"music",component:MusicComponent},
  {path:"",component:VideoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
