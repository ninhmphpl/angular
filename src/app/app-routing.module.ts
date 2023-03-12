import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./table/table.component";
import {PlayGameComponent} from "./play-game/play-game.component";

const routes: Routes = [
  {path:"",component:TableComponent},
  {path:"play/:id/:username",component:PlayGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
