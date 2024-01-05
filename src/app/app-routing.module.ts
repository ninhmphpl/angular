import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateComponent} from "./template/template.component";
import {GroupComponent} from "./group/group.component";
import {MusicComponent} from "./music/music.component";

const routes: Routes = [
  {path:"template",component:TemplateComponent},
  {path:"group",component:GroupComponent},
  {path:"music",component:MusicComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
