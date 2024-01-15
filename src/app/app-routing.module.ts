import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./video/video.component";
import {MusicComponent} from "./music/music.component";
import {VideoTypeComponent} from "./video-type/video-type.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:"video",component:VideoComponent},
  {path:"music",component:MusicComponent},
  {path:"video-type",component:VideoTypeComponent},
  {path:"",component:VideoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
